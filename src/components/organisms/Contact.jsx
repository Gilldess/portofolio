import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { useState } from "react";


const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Fungsi untuk menangani pengiriman form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);

    try {
      formData.append("access_key", import.meta.env.VITE_API_KEY);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        e.target.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.log("gagal mengirim pesan", error)
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <div id="contact" className="py-20 px-4 md:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Hubungi Saya
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Punya ide proyek, tawaran pekerjaan, atau sekadar ingin menyapa? 
            Jangan ragu untuk mengirim pesan. Saya akan membalasnya secepat mungkin.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="lg:w-1/3 space-y-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Informasi Kontak
            </h3>
            
            <div className="flex items-start gap-4">
              <div className="p-4 bg-primary/10 dark:bg-primary/30 text-primary/60 dark:text-primary/50 rounded-xl">
                <FiMapPin className="text-2xl" />
              </div>
              <div>
                <h4 className="font-semibold text-primary">Alamat</h4>
                <p className="text-slate-600 dark:text-slate-400 mt-1 hover:text-primary/60 dark:hover:text-primary/40 transition-colors">
                  Kalimatan, Indonesia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-4 bg-primary/10 dark:bg-primary/30 text-primary/60 dark:text-primary/50 rounded-xl">
                <FiMail className="text-2xl" />
              </div>
              <div>
                <h4 className="font-semibold text-primary">Email</h4>
                <a  
                href="https://mail.google.com/mail/?view=cm&fs=1&to=destcodde@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Email"
                className="text-slate-600 dark:text-slate-400 mt-1 hover:text-primary/60 dark:hover:text-primary/40 transition-colors">
                  destcodde@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-4 bg-primary/10 dark:bg-primary/30 text-primary/60 dark:text-primary/50 rounded-xl">
                <FiPhone className="text-2xl" />
              </div>
              <div>
                <h4 className="font-semibold text-primary">Telepon / WhatsApp</h4>
                <a href="https://wa.me/6282250395910" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 mt-1 hover:text-primary/60 dark:hover:text-primary/40 transition-colors">
                  +62 822 5039 5910
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    required 
                    className="peer w-full bg-transparent border-b-2 border-slate-300 dark:border-slate-700 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-primary/60 dark:focus:border-primary/40 transition-colors placeholder-transparent" 
                    placeholder="Nama Anda"
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute left-0 top-3 text-slate-500 dark:text-slate-400 cursor-text transition-all duration-300 ease-in-out peer-focus:-top-4 peer-focus:text-sm peer-focus:text-primary/60 dark:peer-focus:text-primary/40 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-valid:-top-4 peer-valid:text-sm"
                  >
                    Nama Anda
                  </label>
                </div>

                <div className="relative group">
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required 
                    className="peer w-full bg-transparent border-b-2 border-slate-300 dark:border-slate-700 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-primary/60 dark:focus:border-primary/40 transition-colors placeholder-transparent" 
                    placeholder="Email Anda"
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute left-0 top-3 text-slate-500 dark:text-slate-400 cursor-text transition-all duration-300 ease-in-out peer-focus:-top-4 peer-focus:text-sm peer-focus:text-primary/60 dark:peer-focus:text-primary/40 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-valid:-top-4 peer-valid:text-sm"
                  >
                    Email Anda
                  </label>
                </div>
              </div>

              <div className="relative group">
                <input 
                  type="text" 
                  name="subject" 
                  id="subject" 
                  required 
                  className="peer w-full bg-transparent border-b-2 border-slate-300 dark:border-slate-700 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-primary/60 dark:focus:border-primary/40 transition-colors placeholder-transparent" 
                  placeholder="Subjek Pesan"
                />
                <label 
                  htmlFor="subject" 
                  className="absolute left-0 top-3 text-slate-500 dark:text-slate-400 cursor-text transition-all duration-300 ease-in-out peer-focus:-top-4 peer-focus:text-sm peer-focus:text-primary/60 dark:peer-focus:text-primary/40 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-valid:-top-4 peer-valid:text-sm"
                >
                  Subjek Pesan
                </label>
              </div>

              <div className="relative group">
                <textarea 
                  name="message" 
                  id="message" 
                  rows="4" 
                  required 
                  className="peer w-full bg-transparent border-b-2 border-slate-300 dark:border-slate-700 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-primary/60 dark:focus:border-primary/40 transition-colors placeholder-transparent resize-none" 
                  placeholder="Tulis pesan Anda..."
                ></textarea>
                <label 
                  htmlFor="message" 
                  className="absolute left-0 top-3 text-slate-500 dark:text-slate-400 cursor-text transition-all duration-300 ease-in-out peer-focus:-top-4 peer-focus:text-sm peer-focus:text-primary/60 dark:peer-focus:text-primary/40 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-valid:-top-4 peer-valid:text-sm"
                >
                  Tulis pesan Anda...
                </label>
              </div>

              <div className="flex items-center justify-between pt-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary/70 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? "Mengirim..." : (
                    <>Kirim Pesan <FiSend /></>
                  )}
                </button>

                {submitStatus === "success" && (
                  <span className="text-green-600 dark:text-green-400 font-medium">Pesan terkirim!</span>
                )}
                {submitStatus === "error" && (
                  <span className="text-red-600 dark:text-red-400 font-medium">Gagal mengirim.</span>
                )}
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;