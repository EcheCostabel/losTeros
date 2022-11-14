import emailjs from "@emailjs/browser";

export default function Contact() {
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_reug8pl",
        "template_qkzjtsw",
        event.target,
        "GPTmzfrrOtNzq13iZ"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Contacto</h1>
      <form onSubmit={sendEmail}>
        <label>Nombre y apellido</label>
        <input type="text" name="user_name"></input>
        <hr />
        <label>Mail</label>
        <input type="email" name="user_email"></input>
        <hr />
        <label>Mensaje</label>
        <textarea name="user_message"></textarea>
        <hr />
        <button>Enviar</button>
      </form>
    </div>
  );
}
