package com.hig.sales;

public class PersonalInfo {

	private String firstName;
	private String lastName;
	private String dateOfBirth;
	private String street;
	private String aptOrSuite;
	private String state;
	private String city;
	private long zipCode;

	public PersonalInfo(String firstName, String lastName, String dateOfBirth, String street, String aptOrSuite,
			String state, String city, long zipCode) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.dateOfBirth = dateOfBirth;
		this.street = street;
		this.aptOrSuite = aptOrSuite;
		this.state = state;
		this.city = city;
		this.zipCode = zipCode;
	}
	
	public PersonalInfo(){
		
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getAptOrSuite() {
		return aptOrSuite;
	}

	public void setAptOrSuite(String aptOrSuite) {
		this.aptOrSuite = aptOrSuite;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public long getZipCode() {
		return zipCode;
	}

	public void setZipCode(long zipCode) {
		this.zipCode = zipCode;
	}

	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return "[firstName:   " + firstName + "lastName:   " + lastName + "dateOfBirth:" + dateOfBirth + "street:     "
				+ street + "aptOrSuite: " + aptOrSuite + "state:      " + state + "city:       " + city + "zipCode:    "
				+ zipCode + "]";
	}
}