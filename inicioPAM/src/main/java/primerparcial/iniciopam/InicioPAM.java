/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package primerparcial.iniciopam;

/**
 *
 * @author alant
 */


import java.awt.BorderLayout;
import java.awt.Font;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JButton;
import javax.swing.JPanel;
import javax.swing.JOptionPane;
import javax.swing.SwingUtilities;


public class InicioPAM extends JFrame{
    private JButton reglamento, classroom, fechas, porcentajes;
    private JPanel panelBotones;
    private JLabel cabecera;
    
     public InicioPAM(){ //constructor sin argumentos
      super("Actividad No.2");
      setLayout(new BorderLayout());
      panelBotones= new JPanel();
      panelBotones.setLayout(new GridLayout(2,2));
      cabecera = new JLabel("\n Información");
      cabecera.setFont(new Font("Serif",Font.BOLD,32));
      add(cabecera,BorderLayout.NORTH);

      
      reglamento = new JButton("Reglamento de Poo");
      
      classroom = new JButton("Lineamientos de Classroom");
      
      fechas = new JButton("Fechas de Parciles");
      
      porcentajes = new JButton("Porcentajes de Parciales");
      
      panelBotones.add(reglamento);
      panelBotones.add(classroom);
      panelBotones.add(fechas);
      panelBotones.add(porcentajes);
      
      add(panelBotones, BorderLayout.CENTER);
      
       ManejadorBoton manejador =new ManejadorBoton();
       
       reglamento.addActionListener(manejador);
       classroom.addActionListener(manejador);
       fechas.addActionListener(manejador);
       porcentajes.addActionListener(manejador);
      
      
     }
     
     private class ManejadorBoton implements ActionListener{
        @Override
        public void actionPerformed(ActionEvent e) {
            if(e.getSource() == reglamento){
                 JOptionPane.showMessageDialog(InicioPAM.this,"Reglamento: \n 1.Se requiere 80% de asistencia para tener derecho a evaluación parcial y 80% de trabajos en clase.\n" +
"2.Se permiten 10 minutos de tolerancia y si el alumno llega después de este tiempo puede permanecer en la clase, pero no se tomará la asistencia (Solamente en los horarios de\n" +
"inicio:7:00a.m y 14:00 p.m).\n" +
"3. Las faltas deberán estar justificadas mediante el correo institucional con un plazo máximo de 24 horas posteriores a la hora de falta en clase mediante correo del tutor (a),\n" +
"justificantes entregados fuera de la fecha límite permitido no se aceptan, únicamente se aceptarán recetas médicas y citatorios jurídicos.(De forma física deben ser presentados al\n" +
"tutor para ser validados y de forma posterior emitidos).\n" +
"4. Las tareas y trabajos deberán subirlas al Classroom de forma individual y no se recibirán de manera extemporánea.(Salvo previo justificante validado por el tutor)\n" +
"5. Las tareas y trabajos presentarlos en tiempo y forma. La demora de un trabajo o tarea sin justificante y/o con justificante fuera del límite no se aceptan.\n" +
"6. Utilizar el correo institucional para trabajar bajo la plataforma Google Classroom.\n" +
"7. El plagio o copia de trabajos y/o exámenes, será condicionado a reprobar a la asignatura y se reportará al área correspondiente.\n" +
"8. Cualquier deshonestidad académica será sancionada reprobando el parcial sin derecho a examen final\n" +
"9. En circunstancia de indisciplina o falta de respeto por parte del alumno hacia docentes,administrativos, compañeros o cualquier persona perteneciente a la universidad, se realizará\n" +
"una primera llama de atención, si el alumno hace caso omiso tendrá que abandonar el aula, tres incidencias de este tipo el alumno no tendrá derecho a examen final o parcial.\n" +
"10. Uso de laptops y/o dispositivos móviles quedará limitados a uso exclusivo de las actividades que así lo requieran.\n" +
"11. Prohibido el uso de audífonos durante la clase.\n" +
"12. Prohibido comer y/o tomar líquidos en el salón.\n" +
"13. Prohibido sentarse encima de las mesas , así como columpiarse en las sillas.\n" +
"14.Todo tema académido debe ser revisado primeramente por parte del alumno con el docente, de no resolverse, pasar con su respectivo tutor, y de ser necesario con la coordinación\n" +
"de tutores. En caso de no solucionarse pasar a la dirección del programa educativo (debe mantenerse este seguimiento de forma obligatoria)\n" +
"15.Cualquier situación no prevista en el presente reglamento pasar directamente con la dirección del programa educativo.\n" +
"16. El día destinado a entrega de calificaciones todos los estudiantes deben estar presentes, ese día se entregarán exámenes y se brindará retroalimentación\n" +
"17.Este reglamento entra en vigor después de que se firme o se acepte por la mayoría de los estudiantes asistentes a la primera sesión de la materia, una vez firmado o aceptado por el\n" +
"50% más el jefe de grupo, es vigente para todo alumno inscrito en el curso aunque no esté presente en la primera sesión.");
            }else if(e.getSource()==classroom){
                JOptionPane.showMessageDialog(InicioPAM.this,"Lineamientos de classroom: \n 1.- Respeto \n2.-Importante participación activa en orden\n3.-No entregar trabajos incompletos\n4.-No se aplica examen fuera de tiempo\n5.-Plagio de trabajos = 0 para todos\n6.-3 Faltas = Final Parcial\n7.- Calificación máxima en final 8");
            }else if(e.getSource()==fechas){
                JOptionPane.showMessageDialog(InicioPAM.this,"Fechas de Parciales: \n 1er parcial: 29-09-25 \n 2.- 2do parcial: 03-11-25 \n 3.- 3er parcial01-12-25");
            }else if(e.getSource()==porcentajes){
                JOptionPane.showMessageDialog(InicioPAM.this,"\t\t\tPorcentajes: \n"
                        + "\t\t\n\n1er parcial\n"
                        + "Evidencia de Conocimiento: 40% \nEvidencia de Desempeño: 20%\n Evidencia de Producto: 30%\nProyecto Integrafor: 10%\n"
                        + "\t\t\n\n2do parcial\n"
                        + "Evidencia de Conocimiento: 40% \nEvidencia de Desempeño: 20%\n Evidencia de Producto: 20%\nProyecto Integrafor: 20%\n"
                        + "\t\t\n\n3er parcial\n"
                        + "Evidencia de Conocimiento: 20% \nEvidencia de Desempeño: 10%\n Evidencia de Producto: 40%\nProyecto Integrafor: 30%\n");
            }
     
     }
    
}
     
     public static void main(String [] args){
          SwingUtilities.invokeLater(() -> {
            InicioPAM ventana = new InicioPAM();
            ventana.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            ventana.setSize(650, 500);
            ventana.setLocationRelativeTo(null);
            ventana.setVisible(true);
        });
     }
     
     
}
