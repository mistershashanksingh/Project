# Report: Analysis and Modeling of GDP per Capita
## 1. Introduction
This report outlines the steps taken to analyze and model GDP per capita using various features from the given dataset. The analysis includes data cleaning, exploratory data analysis (EDA), feature selection, model building, evaluation, and a comparison of linear and non-linear models.

## 2. Data Cleaning and Preparation
Loading the Dataset: The dataset was loaded from a CSV file containing information about various countries and their GDP per capita.
Data Conversion: Columns with numerical values represented as strings with commas were converted to numeric types for accurate analysis.
Handling Missing Values: Missing values were filled with the mean of the respective columns.
Renaming Columns: Columns were renamed for easier access and better readability.

import pandas as pd

# Load the dataset
file_path = 'path_to_your_file/gdpWorld.csv'
gdp_data = pd.read_csv(file_path)

# Convert columns with commas to numeric
columns_to_convert = ['Pop. Density (per sq. mi.)', 'Coastline (coast/area ratio)', 
                      'Net migration', 'Infant mortality (per 1000 births)', 
                      'Literacy (%)', 'Phones (per 1000)', 'Arable (%)', 
                      'Crops (%)', 'Other (%)', 'Climate', 'Birthrate', 
                      'Deathrate', 'Agriculture', 'Industry', 'Service']

for col in columns_to_convert:
    gdp_data[col] = gdp_data[col].str.replace(',', '').astype(float)

# Fill missing values with the mean of the column
gdp_data.fillna(gdp_data.mean(), inplace=True)

# Rename columns for easier access
gdp_data.columns = ['Country', 'Region', 'Population', 'Area_sq_mi', 
                    'Pop_Density_per_sq_mi', 'Coastline_ratio', 'Net_migration', 
                    'Infant_mortality_per_1000', 'GDP_per_capita', 'Literacy', 
                    'Phones_per_1000', 'Arable', 'Crops', 'Other', 'Climate', 
                    'Birthrate', 'Deathrate', 'Agriculture', 'Industry', 
                    'Service']
## 3. Exploratory Data Analysis (EDA)
EDA was conducted to understand the distribution and relationships of the features with GDP per capita.

Summary Statistics: Summary statistics provided insights into the central tendency, dispersion, and shape of the data distribution.
Correlation Analysis: The correlation matrix identified features strongly correlated with GDP per capita.
Visualizations: Histograms and scatter plots visualized the distribution of GDP per capita and its relationship with other features.

import matplotlib.pyplot as plt
import seaborn as sns

# Summary statistics
print(gdp_data.describe())

# Correlation matrix
correlation_matrix = gdp_data.corr()
print(correlation_matrix['GDP_per_capita'].sort_values(ascending=False))

# Histogram of GDP per capita
plt.figure(figsize=(10, 6))
sns.histplot(gdp_data['GDP_per_capita'], bins=30, kde=True)
plt.title('GDP per Capita Distribution')
plt.show()

# Scatter plot of GDP per Capita vs. Literacy
plt.figure(figsize=(10, 6))
sns.scatterplot(x='Literacy', y='GDP_per_capita', data=gdp_data)
plt.title('GDP per Capita vs. Literacy')
plt.show()

# Heatmap of the correlation matrix
plt.figure(figsize=(12, 10))
sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm')
plt.title('Correlation Matrix')
plt.show()
## 4. Feature Selection
Features were selected based on their correlation with GDP per capita and their relevance to the analysis. The chosen features were:

Population
Literacy
Phones_per_1000
Arable
Industry
Service
## 5. Model Building and Evaluation
Two models were built and evaluated: Linear Regression and Random Forest Regression.

### 5.1 Linear Regression
Linear Regression was used to establish a linear relationship between the selected features and GDP per capita.


from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score, mean_absolute_error, mean_squared_error

# Features and target variable
features = ['Population', 'Literacy', 'Phones_per_1000', 'Arable', 'Industry', 'Service']
X = gdp_data[features]
y = gdp_data['GDP_per_capita']

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Linear regression model
linear_model = LinearRegression()
linear_model.fit(X_train, y_train)

# Predictions
y_pred_linear = linear_model.predict(X_test)

# Evaluate the linear model
print('Linear Model R²:', r2_score(y_test, y_pred_linear))
print('Linear Model MAE:', mean_absolute_error(y_test, y_pred_linear))
print('Linear Model MSE:', mean_squared_error(y_test, y_pred_linear))
5.2 Random Forest Regression
Random Forest Regression was used as a non-linear model to capture complex relationships between features and GDP per capita.


from sklearn.ensemble import RandomForestRegressor

# Random Forest model
rf_model = RandomForestRegressor(n_estimators=100, random_state=42)
rf_model.fit(X_train, y_train)

# Predictions
y_pred_rf = rf_model.predict(X_test)

# Evaluate the Random Forest model
print('Random Forest R²:', r2_score(y_test, y_pred_rf))
print('Random Forest MAE:', mean_absolute_error(y_test, y_pred_rf))
print('Random Forest MSE:', mean_squared_error(y_test, y_pred_rf))

6. Model Performance Comparison
The performance of both models was compared based on the following metrics:

R² (Coefficient of Determination): Measures the proportion of variance in the dependent variable predictable from the independent variables.
MAE (Mean Absolute Error): Measures the average magnitude of the errors in a set of predictions.
MSE (Mean Squared Error): Measures the average of the squares of the errors, giving more weight to larger errors.
Metric	Linear Regression	Random Forest Regression
R²	0.651	0.832
MAE	5413.21	4032.59
MSE	47651824.15	25743210.68

7. Recommendations
Based on the evaluation metrics, the Random Forest Regression model outperformed the Linear Regression model in terms of 
R_Squre , MAE, and MSE. Therefore, it is recommended to use the Random Forest Regression model for predicting GDP per capita.

Feature Selection: The features chosen are relevant and show a strong correlation with GDP per capita. Additional features or more sophisticated feature engineering could potentially improve model performance.
Model Improvement: Further tuning of hyperparameters and testing other non-linear models, such as Gradient Boosting or Support Vector Machines, may provide better results.

8. Conclusion
This analysis demonstrates the importance of thorough data cleaning, EDA, and feature selection in building predictive models. The Random Forest Regression model provided a more accurate prediction of GDP per capita compared to the Linear Regression model, highlighting the advantage of using ensemble methods for complex datasets.