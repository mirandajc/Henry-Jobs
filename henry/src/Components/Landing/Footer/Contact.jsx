import React, {useRef} from 'react'
import { ContentForm } from '../LandingStyles/footer'
import emailjs from '@emailjs/browser';

function Contact() {
  // console.log(YOUR_SERVICE_ID)
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_7vsqgzj", 
      'template_3cj384e', 
      form.current, 
      'YHOob930gtdc0h7SB')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
    alert('se envio tu mensaje')
  };

  return (
    <ContentForm>
      <form ref={form} onSubmit={sendEmail}>
        <div className='datos'>
          <label>Nombre</label>
          <input type="text" name="user_name"/>
          <label >Email</label>
          <input type="email" name="user_email" />
          <label >Asunto</label>
          <input type="text" name="asunto"/>
        </div>
          <div className='mensaje'>
            <span>
                <textarea  name="message" placeholder='Escribe tu comentario'/> 
            </span>
          {/* <button type="submit" value="Send" >Enviar</button> */}
          <input type="submit" value="Send" />
          </div>
      </form>
      
    </ContentForm>
  )
}

export default Contact