import React from "react";

function article_1() {
	return {
		date: "9 September 2024",
		title: "A Brief Introduction to GraphRAG",
		description:
			"RAGs were all the hype, helping effectively overcome LLM hallucinations. But there was one thing RAGs failed on — providing reliable answers to global questions directed on the entire knowledge corpus (what is the theme of the dataset?). This article explores how GraphRAG solves this challenge.",
		keywords: [
			"GraphRAG",
			"Introduction to GraphRAG",
			"Global Question Answering",
			"RAG Limitations",
			"Neranjhana Ramesh",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.article-link {
					color: #87CEEB; /* Lighter blue */
					text-decoration: none;
					font-size: 1.2em; /* Slightly larger */
					font-weight: bold; /* Makes it stand out */
					margin-top: 20px;
					border-bottom: 2px solid #87CEEB;
					transition: color 0.3s, border-bottom-color 0.3s;
				}

				.article-link:hover {
					color: #00BFFF; /* Change to a darker blue on hover */
					border-bottom-color: #00BFFF; /* Aesthetic underline on hover */
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						RAGs were initially praised for helping to mitigate the issue of LLM hallucinations by retrieving relevant information from external knowledge sources. However, they faced a key limitation when it came to answering global questions over an entire dataset, such as identifying the overarching themes in a knowledge corpus.
					</div>
					<div className="paragraph">
						This article discusses how GraphRAG overcomes these challenges by leveraging graph-based methods to create a more holistic and context-aware solution for question answering at both local and global levels.
					</div>
					<a
						href="https://medium.com/@neranjhanaramesh/a-brief-introduction-to-graphrag-1cf71ab8ba79"
						className="article-link"
					>
						Read the full article here
					</a>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1];

export default myArticles;