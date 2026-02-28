import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const IndexPageTemplate = () => (
  <div>

    {/* ── HERO ─────────────────────────────────────────── */}
    <section className="hero-section">
      <div className="hero-content">
        <p className="hero-eyebrow">Welcome to the world of</p>
        <h1 className="hero-name">Saroj Joshi</h1>
        <p className="hero-tagline">Award-Winning Cookbook Author &amp; Jeweler</p>
        <p className="hero-sub">Mumbai &nbsp;·&nbsp; New York &nbsp;·&nbsp; The World</p>
        <div className="hero-rule"></div>
        <div className="hero-ctas">
          <a href="#books" className="btn-hero-primary">Explore Books</a>
          <a href="#jewellery" className="btn-hero-secondary">View Jewellery</a>
        </div>
      </div>
    </section>

    {/* ── ABOUT ────────────────────────────────────────── */}
    <section className="about-section" id="about">
      <div className="about-inner">
        <div className="about-text">
          <span className="section-label">About</span>
          <h2 className="section-title">Meet Saroj Joshi</h2>
          <div className="section-rule"></div>
          <p>
            Saroj Joshi is a multiple award-winning cookbook author and jeweler. She began
            conducting cooking classes in 1985, and her mastery of creating vegetarian dishes
            inspired by international cuisine has produced three sold-out books.
          </p>
          <p>
            Her third cookbook, <em>Unique Book of Vegetarian Cooking</em>, was launched by
            Crosswords Bookstores across four cities in India and went on to win the prestigious{' '}
            <strong>Gourmand World Cook Book Award</strong> for Best Vegetarian Cuisine Book in
            India — and was nominated for the World's Best Vegetarian Cuisine Book in Paris, France.
          </p>
          <p>
            Available at Crosswords in India, Kitchen Arts &amp; Letters in New York City, and
            worldwide via Amazon. Saroj is currently working on her next book featuring vegan
            alkaline recipes.
          </p>
        </div>
        <div className="about-photo-wrap">
          <div className="about-photo-frame"></div>
          <div className="about-headshot-placeholder">Photo coming soon</div>
        </div>
      </div>
    </section>

    {/* ── BOOKS ────────────────────────────────────────── */}
    <section className="books-section" id="books">
      <div className="books-inner">
        <div className="books-header">
          <span className="section-label light">Her Work</span>
          <h2 className="section-title light">Cookbooks</h2>
          <div className="section-rule light"></div>
        </div>

        <div className="books-grid">

          {/* Featured book */}
          <div className="book-card is-featured">
            <div className="book-cover book-cover-1">
              <div className="award-ribbon">Gourmand Award Winner</div>
              <span className="book-cover-placeholder-text">Unique Book of<br/>Vegetarian Cooking</span>
            </div>
            <div className="book-info">
              <span className="book-year">2010</span>
              <h3 className="book-title">Unique Book of Vegetarian Cooking</h3>
              <p className="book-desc">
                Launched by Crosswords Bookstores in four cities across India. Features
                easy-to-prepare vegetarian recipes spanning Indian, Italian, Mexican, Chinese,
                and Continental cuisines — plus desserts and health drinks. Color photographs
                throughout.
              </p>
              <p className="book-edition-note">&#10003; 2nd Edition Available</p>
              <div className="book-ctas">
                <a
                  href="https://www.crossword.in/cooking/unique-book-vegetarian-cooking-saroj-joshi/p-1341200-27784391254-cat.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-book-solid"
                >
                  Crossword (India)
                </a>
                <a
                  href="https://www.amazon.in/dp/B075V26GG6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-book-outline"
                >
                  Amazon ebook
                </a>
              </div>
            </div>
          </div>

          {/* Book 2 */}
          <div className="book-card">
            <div className="book-cover book-cover-2">
              <span className="book-cover-placeholder-text">Amar Swad</span>
            </div>
            <div className="book-info">
              <span className="book-year">2004</span>
              <h3 className="book-title">Amar Swad</h3>
              <p className="book-desc">
                A Gujarati cookbook celebrating the rich, layered flavors of Gujarati vegetarian
                cuisine — beloved recipes adapted for the modern kitchen.
              </p>
              <p className="book-edition-note">&#10003; 2nd Edition Available</p>
            </div>
          </div>

          {/* Book 3 */}
          <div className="book-card">
            <div className="book-cover book-cover-3">
              <span className="book-cover-placeholder-text">Palak Preparations</span>
            </div>
            <div className="book-info">
              <span className="book-year">1999</span>
              <h3 className="book-title">Palak Preparations</h3>
              <p className="book-desc">
                Her debut cookbook — a creative collection of dishes built around the
                versatile spinach leaf, showing just how far one ingredient can take you.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* ── FOOD STRIP ───────────────────────────────────── */}
    <div className="food-strip" aria-hidden="true">
      <div className="food-strip-panel fsp-1"></div>
      <div className="food-strip-panel fsp-2"></div>
      <div className="food-strip-panel fsp-3"></div>
      <div className="food-strip-panel fsp-4"></div>
    </div>

    {/* ── AWARDS ───────────────────────────────────────── */}
    <section className="awards-section" id="awards">
      <div className="awards-inner">

        <div className="awards-intro">
          <span className="section-label">Recognition</span>
          <h2 className="section-title">Awards &amp;<br/>Achievements</h2>
          <div className="section-rule"></div>
          <p>
            From winning the world's most prestigious cookbook award to being celebrated
            across television and literary events on two continents, Saroj's culinary
            artistry has earned global recognition.
          </p>
        </div>

        <div>
          <div className="awards-list">

            <div className="award-item-highlight">
              <span className="award-year-tag">2010</span>
              <div className="award-text">
                <strong>Gourmand World Cook Book Award</strong>
                <p>Best Vegetarian Cuisine Book in India &nbsp;·&nbsp; Nominated for World's Best in Paris, France</p>
              </div>
            </div>

            <div className="award-item">
              <span className="award-year-tag">2019</span>
              <div className="award-text">Hastaksharr Self-made Diva Anapurna Award, Mumbai</div>
            </div>

            <div className="award-item">
              <span className="award-year-tag">2017</span>
              <div className="award-text">Meet the Author Event, New York City</div>
            </div>

            <div className="award-item">
              <span className="award-year-tag">2004</span>
              <div className="award-text">Tejaswini Woman of the Year Award, Mumbai</div>
            </div>

            <div className="award-item">
              <span className="award-year-tag">2004</span>
              <div className="award-text">Outstanding Achievements in Business, New York City, USA</div>
            </div>

          </div>

          <div className="awards-media-block">
            <div className="awards-media-title">Media &amp; Appearances</div>
            <ul className="awards-media-list">
              <li>Featured on <strong>Zee TV</strong> — episode of <em>Swayam</em></li>
              <li>Featured on <strong>NM TV</strong> — episode on successful women</li>
              <li>Featured on <strong>Tata Sky Senior</strong> — <em>Zindagi Ek Safar</em> (2020)</li>
              <li>Guest three times on <strong>ITV Live</strong>, USA</li>
              <li>Cooking demo for <strong>Friends in Need</strong> charity event, New York City</li>
            </ul>
          </div>
        </div>

      </div>
    </section>

    {/* ── JEWELLERY ────────────────────────────────────── */}
    <section className="jewellery-section" id="jewellery">
      <div className="jewellery-inner">
        <span className="section-label light">Craftsmanship</span>
        <h2 className="section-title light">Jewellery</h2>
        <div className="section-rule light"></div>
        <p className="jewellery-intro">
          Beyond the kitchen, Saroj Joshi is an accomplished jeweler whose pieces reflect
          the same passion for artistry and fine detail that defines her cooking.
        </p>
        <div className="jewellery-grid">
          <div className="jewellery-cell">Photo</div>
          <div className="jewellery-cell">Photo</div>
          <div className="jewellery-cell">Photo</div>
          <div className="jewellery-cell">Photo</div>
        </div>
        <p className="jewellery-coming-soon">Collection photos coming soon</p>
      </div>
    </section>

  </div>
)

IndexPageTemplate.propTypes = {}

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        templateKey
      }
    }
  }
`
