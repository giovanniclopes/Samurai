import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  return (
      <div className="sm:text-lg">
        <Header />
        <main className="px-36 pt-64 sm: px-4">
          <section>
            <p>
              Hear my call, I'm chippin' in
            </p>
            <p>
              Total war, I'm chippin' in
            </p>
            <p>
              Casings fall, I'm chippin' in
            </p>
            <p>
              Kill them all!
            </p>
          </section>

          <section className="mt-10">
            <p>
              Boas-vindas ao meu site da Samurai. Quem sabe, sabe. Quem não sabe,
            </p>
            <p>
              não tem que saber de porra nenhuma. SILVERHAND PRA SEMPRE!!!
            </p>
            <p>
              Karim 012
            </p>
          </section>

          <hr className="border border-cpTextColor mt-10 mx-auto w-[50%]" />

          <section className="text-white mt-10">
            <p>
              A maior banda de todos os tempos foi formada no início do século XXI em
              </p>
            <p>
              Night City. Seus membros são:
              </p>
              <div className="mt-10">
                <ul className="flex flex-1 flex-col gap-5 list-disc">
                  <li>
                    <p>Johnny Silverhand - o soberano do punk, guerreiro anticorporativo, ex-</p>
                    <p>soldado e arqui-inimigo das corporações. Vocal/Guitarra.</p>
                  </li>
                  <li>
                    <p>Kerry Eurodyne - camarada do Johnny que cantava quase tão bem.</p>
                    <p>mas sem aquela pegada. Ele acabou seguindo o rumo comercial quando a</p>
                    <p>banda acabou. Vocal/Guitarra</p>
                  </li>
                  <li>
                    <p>Denny - uma mulher da pesada que arregaça na bateria. Drums.</p>
                  </li>
                  <li>
                    <p>Nancy (Conhecida atualmente como Bes Isis) - uma estrela no teclado.</p>
                    <p>Ao que tudo indica, defenestrou o marido abusivo do alto de um</p>
                    <p>megaprédio. uma pena ela ter se vendido pro N54 News. Teclado.</p>
                  </li>
                  <li>
                    <p>Henry - um guri que faz de tudo. trabalhou no primeiro protótipo de link pessoal.</p>
                  </li>
                </ul>
              </div>
          </section>

          <hr className="border border-cpTextColor mt-10 mb-10 mx-auto w-[50%]" />

          <section>
            <p>A Samurai começou tocando em uma boate minúscula cheia de fumaça</p>
            <p>chamada Rainbow Cadenza. Eu nunca vou esquecer daquela sensação.</p>
            <p>Brigas com os corpes, competição de bebidas com a Nance. Ouvir as tiradas</p>
            <p>enormes do Johnny... Sem falar no senso de humor dele. Uma vez, ele fez</p>
            <p>umas camisetas pra turnê mundial de 2020... Engraçado porque a Samurai</p>
            <p>não conseguia nem fazer show numa arena nos Estados Unidos. Ele</p>
            <p>escolheu uns lugares bem aleatórios... Pequim, Sapporo, Katowice. Eu até</p>
            <p>tinha uma dessas camisas. Uma pena que ninguém sacou a piada.</p>
            <p>O roque de verdade morreu que nem  Silverhand - Com uma explosão</p>
            <p>devastadora.</p>
            <p>Ainda estamos aqui, ouvindo suas músicas Johnny. E não esquecemos</p>
            <p>não sobrou para nós</p>
          </section>
        </main>
        
        <Footer />
      </div>
  )
}

export default App
