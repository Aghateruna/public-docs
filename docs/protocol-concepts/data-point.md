---
description: A Data Point is specific type of reputation data about a given user.
---

# Data Point

### Key Attributes:

* A Data Point provides a verified fact about a user's reputation at a given point in time.
* A Data Point is always associated with a [Data Issuer](data-issuer.md).&#x20;
* A Data Issuer can have multiple Data Points, but a Data Point only has one Data Issuer.
* A Data Point only contains objective and verifiable data.
* A Data Point doesn't store any scoring information; they can be use in multiple scoring systems.
* Example:&#x20;
  * Data Issuer: `GitHub`
  * Data Point: `Stars`
  * Value: `[number of stars]`

### **Variable** and I**mmutable** Data Points:

* Immutable data points are simpler versions of variable data points.
* **Variable Data Points** contain a value that can change over time.
  * Example: GitHub Stars, ETH Balance on Base
* **Immutable Data Points** are only set once, and never recalculated again.
  * Example: Base Learn, KYC, First Transaction on Base

### Categories of Data Points:

* **Metrics**: Ongoing measurable activities (e.g., GitHub contributions, transactions)
* **Achievements**: One-time accomplishments and permanent credentials (e.g., a hackathon win)
* **Affiliations**: Memberships and group affiliations that can be lost or revoked (e.g., job or a DAO)
* **Accounts**: Social profiles and other verifications (e.g., twitter, farcaster, github)

### Scoring Tags

* We use a **tag-based system** that determines how data points are used in [scoring-systems](scoring-systems/ "mention"):
  * Initial tags: `human`, `builder`, `creator`
  * Data points can have multiple tags
  * Scoring systems use tags to determine which data points to include

