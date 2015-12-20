package peterDropServer;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.io.*;

import javax.xml.ws.*;
import javax.xml.transform.*;
import javax.xml.transform.stream.*;

@WebServiceProvider
@ServiceMode(value = Service.Mode.PAYLOAD)
public class CoreConnect implements Provider<Source> {

    public Source invoke(Source request) {
        try {
			return new StreamSource(new StringReader( "<computer>"+InetAddress.getLocalHost().getHostName()+"</computer>"));
		} catch (UnknownHostException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
    }
}
