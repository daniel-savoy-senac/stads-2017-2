import java.io.IOException;
import java.io.PrintWriter;
import java.util.Calendar;
import java.util.GregorianCalendar;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Inicio extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        /*
        GregorianCalendar cal = new GregorianCalendar();
        int hour = cal.get(Calendar.HOUR_OF_DAY);
        
        String msg = "Vai dormir!!!";
        
        if(hour > 6 && hour <= 12) msg = "Boa manhã";
        else if(hour > 12 && hour <= 15) msg = "Bom dia";
        else if(hour > 15 && hour <= 18) msg = "Boa tarde";
        else if(hour > 18 && hour <= 24) msg = "Boa noite";
        */
        /*
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<body>");
            out.println("<h1>"+msg+"</h1>");
            out.println("</body>");
            out.println("</html>");
        }
        */
        
        String msg = request.getParameter("msg");
        
        // REQUEST CONTEXT
        request.setAttribute("msg", msg);
        
        // SESSION CONTEXT
        if(!msg.equals("session")){
            request.getSession().setAttribute("msgS", msg);
        }
        
        // APPLICATION CONTEXT
        request.getServletContext().setAttribute("msgA", msg);
        
        request.getRequestDispatcher("/WEB-INF/main.jspx").forward(request, response);
        
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        /*
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<body>");
            out.println("<h1>A Girafa bebeu toda a tequila!!!</h1>");
            out.println("</body>");
            out.println("</html>");
        }
        */
        response.sendRedirect("resposta.html");
    }

}
