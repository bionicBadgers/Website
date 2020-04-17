Vue.component('navigation',
	{
  template:
	`
		<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" style="padding: 0em; padding-left: 1em; padding-right: 1em; margin: 0em;">
			<a class="navbar-brand" href="index.html">
				<img src="images/team_logo_transparent_background.png" alt="Logo " style="height:50px; padding: 0em; margin: 0em;">
			</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item">
						<a class="nav-link" href="Contact.html">Contact Us </a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="Our Team.html">Our Team </a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="Sponsors.html">Sponsors</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="Photos.html">Photos </a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="Donations.html">Donations </a>
					</li
				</ul>
			</div>
		</nav>
	`
	}),



new Vue({ el: '#templateNav' })
