package com.hig.sales;

public class MorrisData {
	
	private String  period;
	private long iphone;
	private long ipad;
	private long itouch;
	
	public MorrisData(String period, long iphone, long ipad, long itouch) {
		super();
		this.period = period;
		this.iphone = iphone;
		this.ipad = ipad;
		this.itouch = itouch;
	}
	
	public String getPeriod() {
		return period;
	}
	public void setPeriod(String period) {
		this.period = period;
	}
	public long getIphone() {
		return iphone;
	}
	public void setIphone(long iphone) {
		this.iphone = iphone;
	}
	public long getIpad() {
		return ipad;
	}
	public void setIpad(long ipad) {
		this.ipad = ipad;
	}
	public long getItouch() {
		return itouch;
	}
	public void setItouch(long itouch) {
		this.itouch = itouch;
	}
	

}
