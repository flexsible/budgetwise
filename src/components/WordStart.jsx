import React from 'react';
import TombolNext from '../components/TombolNext';

const WordStart = () => {
  return (
    <div className="flex items-start justify-center min-h-screen bg-krem">
      <div className="relative w-[1005px] h-[595px] bg-[#FFFEFE] rounded-[30px]">
        <div className="absolute top-0 w-[910px] h-[500px] bg-[#F4D35E] rounded-[30px] mt-0 ml-[47.5px] p-8 flex flex-col justify-center items-center text-center">
          <h1 className="text-2xl font-bold mb-4">Selamat Datang di BudgetWise!</h1>
          <p className="mb-2">
            Kami senang menyambut Anda ke situs kami, di mana pengelolaan keuangan menjadi lebih sederhana dan sesuai dengan kebutuhan Anda. BudgetWise hadir untuk membantu Anda merencanakan masa depan dengan lebih baik melalui dua pilihan layanan keuangan yang disesuaikan dengan tujuan dan toleransi risiko Anda:
          </p>
          <p className="mb-2">
            <strong>Pilihan Konservatif</strong>: Cocok untuk Anda yang mencari stabilitas dan keamanan. Layanan ini fokus pada alokasi dana yang tinggi untuk kebutuhan utama sehari-hari, dengan risiko rendah sehingga Anda dapat merasa tenang dalam mengelola keuangan Anda.
          </p>
          <p className="mb-2">
            <strong>Pilihan Agresif</strong>: Dirancang bagi Anda yang siap mengambil risiko menengah hingga tinggi untuk potensi imbal hasil yang lebih besar. Pilihan ini tetap memprioritaskan kebutuhan utama sehari-hari Anda, namun dengan pendekatan yang lebih dinamis untuk mencapai pertumbuhan yang lebih cepat.
          </p>
          <p className="mb-2">
            Di BudgetWise, kami memahami bahwa setiap orang memiliki kebutuhan dan tujuan keuangan yang unik. Oleh karena itu, kami berkomitmen untuk memberikan solusi yang tepat bagi Anda. Jelajahi lebih lanjut dan temukan bagaimana kami dapat membantu Anda mencapai keseimbangan keuangan yang optimal.
          </p>
          <p className="mb-2">
            Selamat merencanakan masa depan keuangan Anda dengan BudgetWise!
          </p>
        </div>
        <div className="absolute bottom-[0px] left-1/2 transform -translate-x-1/2">
          <TombolNext />
        </div>
      </div>
    </div>
  );
}

export default WordStart;
