# Data Analysis and Model Evaluation
## 1. Data Collection
### Data Overview:
The dataset used is `weatherAUS.csv`, which contains weather-related features and a target variable indicating if it will rain tomorrow `(RainTomorrow)`.

#### Columns in the Dataset:

` ['Date', 'Location', 'MinTemp', 'MaxTemp', 'Rainfall', 'Evaporation', 'Sunshine', 'WindGustDir', 'WindGustSpeed', 'WindDir9am', 'WindDir3pm', 'WindSpeed9am', 'WindSpeed3pm', 'Humidity9am', 'Humidity3pm', 'Pressure9am', 'Pressure3pm', 'Cloud9am', 'Cloud3pm', 'Temp9am', 'Temp3pm', 'RainToday', 'RISK_MM', 'RainTomorrow']`

#### Initial Inspection

```
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 142193 entries, 0 to 142192
Data columns (total 24 columns):
 #   Column         Non-Null Count   Dtype
---  ------         --------------   -----
 0   Date           142193 non-null  object
 1   Location       142193 non-null  object
 2   MinTemp        141556 non-null  float64
 3   MaxTemp        141871 non-null  float64
 4   Rainfall       140787 non-null  float64
 5   Evaporation    81350 non-null   float64
 6   Sunshine       74377 non-null   float64
 7   WindGustDir    132863 non-null  object
 8   WindGustSpeed  132923 non-null  float64
 9   WindDir9am     132180 non-null  object
 10  WindDir3pm     138415 non-null  object
 11  WindSpeed9am   140845 non-null  float64
 12  WindSpeed3pm   139563 non-null  float64
 13  Humidity9am    140419 non-null  float64
 14  Humidity3pm    138583 non-null  float64
 15  Pressure9am    128179 non-null  float64
 16  Pressure3pm    128212 non-null  float64
 17  Cloud9am       88536 non-null   float64
 18  Cloud3pm       85099 non-null   float64
 19  Temp9am        141289 non-null  float64
 20  Temp3pm        139467 non-null  float64
 21  RainToday      140787 non-null  object
 22  RISK_MM        142193 non-null  float64
 23  RainTomorrow   142193 non-null  object
dtypes: float64(17), object(7)
memory usage: 26.0+ MB 
```

### Missing Values:
 
 - Several columns have missing values, with `Evaporation` and `Sunshine` having the most.

## 2. Data Preparation

### Handling Missing Values:

- Dropped rows with missing values in the target column `RainTomorrow`.

- Filled missing values for numerical columns with the mean and for categorical columns with the mode.

### Feature Engineering:

Extracted month and day from the `Date` column.

### Encoding Categorical Features:

- Categorical features like `Location, WindGustDir, WindDir9am,` and `WindDir3pm` were converted to dummy variables.

### Standardizing Features:

- Numerical features were scaled using `StandardScaler`.

## 3. Algorithm Understanding
### Model Used:

- The `RandomForestClassifier` was used, a robust choice for classification tasks.

### Hyperparameter Tuning:

- Parameters `n_estimators` and `max_depth` were tuned using GridSearchCV.

#### Best Parameters:

` Best parameters found: {'max_depth': None, 'n_estimators': 100}`

## 4. Model Development
### Splitting Data:

- The dataset was split into training and testing sets using `train_test_split.`

### Training and Hyperparameter Tuning:

- The RandomForestClassifier was trained and optimized with GridSearchCV.

## 5. Model Evaluation
### Evaluation Metrics:

- Confusion Matrix:

```
[[22098     0] 
[    0  6341]]
```
- Classification Report:

```
            precision    recall  f1-score   support

        No       1.00      1.00      1.00     22098
       Yes       1.00      1.00      1.00      6341

  accuracy                           1.00     28439
 macro avg       1.00      1.00      1.00     28439
 ```
weighted avg 1.00 1.00 1.00 28439

- **ROC AUC Score:**
```
ROC AUC Score: 1.0000
```
### Confusion Matrix Visualization:

- A heatmap was used to visualize the confusion matrix.
## 6. Further Improvements
### Feature Selection:

- Feature importance from the RandomForest model was not explicitly handled but could be explored.

### Cross-validation:

- GridSearchCV used cross-validation for hyperparameter tuning. Further cross-validation on the final model could be considered.
