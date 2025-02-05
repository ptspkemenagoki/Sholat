// ambil tanggal
const getDate = new Date();
const getYear = getDate.getFullYear();
const getMont = getDate.getMonth() + 1;
const getDay = getDate.getDate();

function bulan(){
	if(getMont < 10 ){
		bulan = `0${getMont}`;
	}else{
		bulan = getMont
	}
	return bulan
}

// ambil hari
function hari(){
	if (getDay < 10){
		hari = `0${getDay}`;
	}else {
		hari = getDay;
	}
	return hari;
}
const tanggal = `${getYear}-${bulan()}-${hari()}`;


function getJadwalSholat() {
	fetch('https://api.myquran.com/v2/sholat/format/json/jadwal/kota/617/tanggal/' + tanggal)
	.then(response => response.json())
	.then(data => {
		const jadwal = data.jadwal.data;
		document.querySelector('.subuh').textContent = jadwal.subuh;
		document.querySelector('.dzuhur').textContent = jadwal.dzuhur;
		document.querySelector('.ashar').textContent = jadwal.ashar;
		document.querySelector('.maghrib').textContent = jadwal.maghrib;
		document.querySelector('.isya').textContent = jadwal.isya;
		document.querySelector('.tanggal').textContent = jadwal.tanggal;
		
	});
}

getJadwalSholat();

