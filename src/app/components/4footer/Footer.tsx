import React from "react";

// importing styles
import "./footer.scss";

export default function Footer() {
	return (
		<div className="footer">
			<p>
				<span>Page Author</span>
				Max Marschhauser
			</p>
			<p>
				<span>Copyright</span>©{new Date().getFullYear()}.
			</p>
			<p>
				<span>e-mail</span>
				max.marschhauser
				<wbr />
				@gmail.com
			</p>
			<p>
				<span>Portfolio Page</span>
				<a href="http://www.maxdev.com.hr/" target="_blank">
					www.maxdev.com.hr
				</a>
			</p>
		</div>
	);
}
