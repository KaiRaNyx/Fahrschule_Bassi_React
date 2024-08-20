import Logo from "@/assets/bassi_images/Fahrschule-Bassi-Fabio_Logo.png"

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/3 md:mt-0">
                <img alt="logo" src={Logo} height={200} width={80}/>
            </div>
            <div className="mt-10 basis-1/3 md:mt-0">
                <h4 className="font-bold">Jetzt Kontakt aufnehmen!</h4>
                <p className="my-5">Bassi Fabio</p>
                <p className="my-5">5034 Suhr</p>
                <p className="my-5">Tel. 076 346 33 03</p>
                <p className="my-5">bassi.fa@gmail.com</p>
            </div>
            <div>
                <p>© Fahrschule Bassi All Rights Reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer