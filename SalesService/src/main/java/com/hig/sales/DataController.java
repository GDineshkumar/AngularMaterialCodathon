package com.hig.sales;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController 
public class DataController {
	
	@RequestMapping("/data")
	public List<MorrisData> getdata(){
		List<MorrisData> data  = new ArrayList<MorrisData>();
		data.add(new MorrisData("2010 Q1", 2666, 0, 2647));
		data.add(new MorrisData("2010 Q2", 2778, 2294, 2441));
		data.add(new MorrisData("2010 Q3", 4912, 1969, 2501));
		data.add(new MorrisData("2010 Q4", 3767, 3597, 5689));
		data.add(new MorrisData("2011 Q1", 6810, 1914, 2293));
		data.add(new MorrisData("2011 Q2", 5670, 4293, 1881));
		data.add(new MorrisData("2011 Q3", 4820, 3795, 1588));
		data.add(new MorrisData("2011 Q4", 15073, 4293, 5175));
		data.add(new MorrisData("2012 Q1", 10687, 4460, 2028));
		data.add(new MorrisData("2012 Q2", 8432, 5713, 1791));
		return data;
	}

}
