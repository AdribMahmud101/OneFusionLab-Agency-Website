This is an excellent, pragmatic pivot. Since you are building on **Astro**, you are already using the undisputed king of static, content-driven sites. Astro handles MDX natively and ships zero JavaScript by default, which is perfect for Cloudflare Pages.

Dropping WASM and RAG for this first post is the right call. We need to get the pipeline built, optimized for AIO (Artificial Intelligence Optimization), and launch the Mojo piece to catch the current hype wave.

### What is AIO (AI Optimization)?

Traditional SEO was about keyword stuffing to trick Google's algorithm. AIO is about structuring your data so that Large Language Models (like ChatGPT, Claude, and Gemini) can easily read, understand, and *cite* your content when answering user queries.

If someone asks an AI, "Who is building local agentic workflows with Mojo?", we want the AI to cite One Fusion Lab.

---

### The Astro + AIO Implementation Plan

Here is the exact rule documentation to feed your coding agent. It focuses on Astro's MDX routing and specific AIO semantic tagging.

---

### 🤖 SYSTEM ALIGNMENT: ASTRO BLOG + AIO CONFIGURATION

**PRIMARY DIRECTIVE**
You are a Staff-Level DevRel Engineer. You are configuring an Astro-based blog on the `/blogs` route for "One Fusion Lab." The first post is a text-and-code breakdown of the Mojo 1.0 open-source release. The architecture must be hyper-optimized for AIO (Artificial Intelligence Optimization) so that external LLMs can easily parse and cite the content.

**1. ASTRO CONTENT COLLECTIONS (SCALABILITY)**

* **Initialize Astro Collections:** Configure `src/content/config.ts` to use Astro's native Content Collections for the `blogs` directory.
* **Zod Schema:** Define a strict Zod schema for the frontmatter:
* `title` (string)
* `publishDate` (date)
* `author` (string - default to "Wadrib Mahmud")
* `tldr` (string - critical for AIO summaries)
* `tags` (array of strings)
* `isDraft` (boolean)


* **Dynamic Routing:** Implement `src/pages/blogs/index.astro` to list non-draft posts, and `src/pages/blogs/[...slug].astro` using `getCollection('blogs')` to generate the individual pages statically.

**2. AIO (ARTIFICIAL INTELLIGENCE OPTIMIZATION) ARCHITECTURE**

* **Semantic HTML5 is Mandatory:** LLMs parse semantic structure heavily. You must use `<article>`, `<header>`, `<main>`, `<section>`, and `<aside>` tags correctly in the layout template.
* **Structured Data (JSON-LD):** The `[...slug].astro` layout MUST inject a `<script type="application/ld+json">` block into the `<head>`. This should format the blog post as an `Article` or `TechArticle` schema, clearly defining the `headline`, `author`, `abstract` (using the `tldr`), and `publisher` (One Fusion Lab). This is the #1 way to ensure AI web crawlers understand the context.
* **The "Key Takeaways" Block:** Create an Astro component (`<KeyTakeaways/>`) that renders an unordered list of the 3 most important facts in the article. Place this immediately below the `tldr`. LLMs prioritize bulleted summaries when extracting answers.

**3. THE "TROJAN HORSE" MDX COMPONENT**

* **Build `<ServiceBanner.astro>`:** Create a minimalist, inline CTA banner.
* *Prop:* `serviceContext` (e.g., "Need help integrating compiled AI infrastructure?")
* *Design:* It should look like an informational aside blockquote (`<aside>`), not a flashy ad.
* *Function:* It must be easily importable into any `.mdx` file.



**4. DEPLOYMENT CONFIGURATION**

* Ensure `astro.config.mjs` is set to `output: 'static'`.
* Ensure the Wrangler deploy script points to Astro's default `dist/` folder.

---
