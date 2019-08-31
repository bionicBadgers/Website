Vue.component('foot',
	{
  template:
	`
		<footer>
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-md-3 col-sm-6">
						<h3>About Us</h3>
						<div class="mt-25">
							<img alt="footer-logo" src="images/Company-Logos-Pictures/Phase 2 Logo Expanded.png">
							<p class="mt-25">This is where we talk about our media platforms and inclued links (int the bottom) of all the platforms we use.</p>
								<div class="mt-25 footer-social-icons">
									<ul>
										<li>
											<a href="https://www.facebook.com/BionicBadgersFTC/?hc_ref=ARQPVz-ph4_m4UAAfMehdb3Fynr3cwFKqPa-DgP9kqVj4lAacC7y0x93d2YBe__-ZwY&fref=nf&__xts__[0]=68.ARB4wQwJbhMr569bbbp0i9SI1aOznSWNNPM2w3DXd485uPx8Lj-3MKSRF0KPLHDcurF4vYasRQjN1QnHC3qwvDLYedMc75ShjIsqMHNUZnPOfkIz4IwuAlvqcKHTPQJtY05jPT3F5Rf7oHrDFAmpK-y_fckwzBuvYrICtKyhNOWiwGkhezhiwGrZKO9S5GlVHz-qNMyXq4giKB4t1pxAKePLliR2bN2piHELJ48MqrqrOh133C7iJ69d2u104UULYf1pQ7khZ0y9ZEeUbFxESMlNs5s8LycZ_c-_ZsBkNhSy8T98-D_7m0WGbAkhA4Ql3KsR3oCooZjM34OtA2uR_-M&__tn__=kC-R.html">
												<i class="fab fa-facebook-square"></i>
											</a>
										</li>
										<li>
											<a href="#">
												<i class="fab fa-instagram"></i>
											</a>
										</li>
										<li>
											<a href="#">
												<i class="fab fa-pinterest"></i>
											</a>
										</li>
										<li>
											<a href="#">
												<i class="fab fa-skype"></i>
											</a>
										</li>
										<li>
											<a href="#">
												<i class="fab fa-youtube"></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-3">
						<h3>Credited</h3>
						<ul class="footer-list">
							<li>
								<a href="https://unsplash.com/@xdesro"> Some of our photos were taken by Henry Desro</a>
							</li>
							<li>
								<a href="https://unsplash.com/@camorin13"> Some of our photos were taken by Cam Morin</a>
							</li>
							<li>
								<a href="https://unsplash.com/@helloquence"> Some of our photos were taken by Helloquence</a>
							</li>
							<li>
								<a href="https://unsplash.com/@jesuskiteque">Some of our photos were taken by Jesus Kiteque</a>
							</li>
						</ul>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-3">
						<h3>Useful Links</h3>
						<ul class="footer-list">
							<li>
								<a href="https://www.firstinspires.org/robotics/ftc">First Tech Challenge</a>
							</li>
							<li>
								<a href="#"> Place Useful Link Here</a>
							</li>
							<li>
								<a href="#"> Place Useful Link Here</a>
							</li>
						</ul>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-3">
					<img alt="First Tech Challenge Logo"  src="images/FIRST Logo.png">
					</div>

				</div>
				<div class="footer-bar">
					<p>Bionic Badgers of Wyoming © 2019. All Rights Reserved.</p>
				</div>
			</div>
		</footer>
	`
	}),



new Vue({ el: '#templateFoot' })
