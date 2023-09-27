package com.shashank.pkg;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class PersonalTest {
    @Test
    public void returnHelloWorld(){
        Person shashank = new Person();
        assertEquals("Hello World",shashank.helloWorld());
    }    
}
