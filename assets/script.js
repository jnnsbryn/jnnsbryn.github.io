$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "artikel.json",
		dataType: "json",
		success: function(data) {
			$.each(data, function(index, item) {
				var html = '';
				html += '<li class="list-group-item bg-dark content">';
				html += '<h4><a href="./' + item.id + '/' + item.slug + '" class="text-decoration-none text-bg-dark">' + item.judul + '</a></h4>';
				html += '<small class="text-bg-dark">' + item.tanggal + '</small>';
				html += '</li>';
				$('#list-group').append(html);
			});
			$(".content").slice(0, 8).show();
			$("#loadMore").on("click", function(e){
				e.preventDefault();
				$(".content:hidden").slice(0, 8).slideDown();
					if($(".content:hidden").length == 0) {
						$("#loadMore").text("- Semua artikel sudah ditampilkan. -").addClass("noContent");
					}
			});
		}
	});
});

const loadingNumber = document.getElementById('loading-number');
const splashScreen = document.getElementById('splash-screen');
let percentage = 0;

const interval = setInterval(() => {
	percentage += 1;
	loadingNumber.textContent = `${percentage}%`;

	if (percentage === 100) {
		clearInterval(interval);
		// Trigger the fade-out effect
		splashScreen.classList.add('fade-out');
		setTimeout(() => {
			splashScreen.style.display = 'none';
		}, 1000); // Match this with the duration of the fade-out transition
	}
}, 30); // Update every 30 ms to reach 100% in 3 seconds