---
title: "Choosing an IaC Language for your Project"
date: 2024-06-03 00:00:00 +0000
tags: writing coding devops reflections
image_url: https://d19w7e3j8gkywb.cloudfront.net/posts/iac_lang_hero@5x.jpg
image_url_alt: https://d19w7e3j8gkywb.cloudfront.net/posts/iac_lang_hero@5x.webp
---

You're starting a new project, you've got cloud infrastructure to build, and you know that defining your infrastructure-as-code (IaC) is crucial for most modern software projects. But what language should you use for your IaC? Most of us will be familiar with the ubiquitous Terraform, but what about the new kids on the block like Pulumi? Or the cloud-specific options like AWS CloudFormation and CDK?

I dug into this topic for 101 Ways, intending to choose which IaC language to use and recommend for our modernisation projects. As with everything in software, there's a lot of nuance, preference, and opinion; your decision will depend on your unique circumstances. Following research, experience, and interviews with my colleagues at 101 Ways, here's my take.



# Infrastructure-as-Code Language Choice at 101 Ways

- [The Headline](#the-headline)
- [Why Terraform?](#why-terraform)
	* [It's a popular, purpose-built, declarative DSL](#its-a-popular-purpose-built-declarative-dsl)
	* [Enabling application developers to write infrastructure will always require targeted upskilling](#enabling-application-developers-to-write-infrastructure-will-always-require-targeted-upskilling)
	* [Terraform offers greater flexibility than Cloud-Specific (even if Multi-Cloud is seldom useful)](#terraform-offers-greater-flexibility-than-cloud-specific-even-if-multi-cloud-is-seldom-useful)
	* [Maturity and community matters](#maturity-and-community-matters)
	* [To conclude](#to-conclude)
- [A Note on Terraform's BSL Licence & OpenTofu](#a-note-on-terraforms-bsl-licence--opentofu)
- [References](#references)
- [Credits](#credits)


## The Headline

Terraform (or OpenTofu; see "A Note on Terraform's BSL Licence & OpenTofu" for more details) is currently the best Infrastructure-as-Code language we should choose for modernisation projects and that I would recommend to clients and the community. Despite some anger-inducing evils (don't mention state files), it remains the most well-supported, mature, flexible and infrastructure-suitable language out there.

I compared Terraform with these other popular solutions available on the market:

<img
    class="post-image"
    style="box-shadow:none;width:75%;"
    src="https://d19w7e3j8gkywb.cloudfront.net/posts/iac_lang_choice_landscape@5x.png"
/>
<span class="post-caption">Popular IaC solutions on the market</span>

> NB: I focused on IaC languages that allow the provisioning of infrastructure, not on configuration management tools like Chef/Ansible/Puppet, IaC tooling like SpaceLift… or specific infrastructure frameworks or architecture paradigms.


## Why Terraform?

### It's a popular, purpose-built, declarative DSL
Terraform, AWS CloudFormation, GCP Deployment Manager Templates and Azure Resource Manager Templates are all examples of **declarative** Domain-Specific Languages (DSLs). In contrast, Pulumi, AWS CDK, and Terraform CDK allow you to write in general programming languages, which are **imperative** by nature.

Declarative code describes the desired outcome **without** a step-by-step process to achieve it, whereas imperative code **explicitly specifies** the sequence of steps to complete that outcome.

Declarative can lead to verboseness and, therefore, scaling problems; however, it's often easier to read, understand, and have confidence in the result. Imperative allows writing more concise, elegant code - using common constructs like iteration and conditional statements. However, it's also much easier to do the wrong thing and introduce unnecessary complexity with unintended outcomes. Writing imperative code provides a temptation to focus on the code itself rather than the underlying infrastructure being provisioned. Whilst there are pros and cons to both, declarative is better suited to infrastructure; it's **harder to do the wrong thing** and **easier to do the right thing**, especially in a DSL designed for infrastructure.

Infrastructure requires a different type of thinking and knowledge than writing application code, and it's also helpful to have that separation. It does mean you have new syntax to learn, but that is relatively quick and easy. It takes significantly longer to learn **about** infrastructure (which you'll need to do whatever language you use).

### Enabling application developers to write infrastructure will always require targeted upskilling
Part of the promise of writing your IaC in a general programming language that matches the rest of your codebase is that it will make it easier for application teams to own their infrastructure (rather than everything being done by a dedicated platform/DevOps/SRE team). However, what we've seen at 101 Ways is that, in practice, this doesn't happen organically. There has to be a conscious effort towards upskilling and supporting developers, giving them time and space to learn about infrastructure so they feel empowered and confident to start contributing. The teams must be set up to enable this with access to the proper support and expertise.

As mentioned, learning new syntax for infrastructure is not very difficult, and it has benefits—it pushes you to learn and understand infrastructure itself and helps with mental switching between the two different disciplines.

Only putting your IaC into a language like TypeScript and hoping for the best won't empower your application developers to start contributing to their infrastructure (on the flip side, it might make a mess and result in very high infrastructure costs).

### Terraform offers greater flexibility than Cloud-Specific (even if Multi-Cloud is seldom useful)
If you're happy to lock into one cloud service provider, there's an argument to be made for cloud-specific options such as AWS CloudFormation or AWS Cloud Development Kit (CDK). However, a point to consider is that AWS CDK is relatively new and, as such, often lacks documentation, making for a poor development experience. You could skip AWS CDK and focus on AWS CloudFormation, but there are further inflexibilities that come with being inside a single Cloud Service Provider; as soon as you want to use an external provider such as Kubernetes, Cloudflare or Hashicorp Vault, you are unable to manage all of your infrastructure using AWS CDK/CloudFormation, requiring some other tool anyway.

### Maturity and community matters
Many developers enjoy writing IaC with standard programming languages such as Pulumi or Terraform CDK, and both options, though newer on the market, have growing communities around them. They do, however, lack greatly in comparison with Terraform. Currently, Terraform CDK links to Terraform documentation for many modules, meaning you need to understand Terraform to convert it into Terraform CDK code. Similar complaints are found in the community regarding AWS CDK and Pulumi - the documentation is bad, and some examples just don't work, or you end up in Terraform's docs anyway.

Terraform is the most mature, has the biggest community, and is very well-supported (for a reason). There's a community around linting, formatting and coverage. There's a wide variety of support for popular providers such as Kubernetes, Cloudflare, Helm, Hashicorp Vault and many more. There is wide support for community modules that help with creating best-practice infrastructure.

Terraform has the best support out there, which is incredibly important when you run into issues or need to get stuff done.

### To conclude
As of writing, I'll be sticking with Terraform (perhaps OpenTofu very soon) because:
- Infrastructure provisioning is best suited to a declarative DSL.
- Writing IaC in a generic programming language isn't sufficient to enable developers to manage their own infrastructure and can cause larger issues.
- It gives you much more flexibility regarding external providers and community-built best-practice modules.
- It's still the most mature & well-supported with the biggest community. When you need help, you'll find it.

## A Note on Terraform's BSL Licence & OpenTofu
IBM has announced plans to acquire HashiCorp for $6.4 billion <sup>[1][2][3]</sup>. In August 2023, HashiCorp announced a change in the licensing for Terraform, transitioning from the Mozilla Public License (MPL) to the Business Source License (BSL) with minimal advance notice <sup>[4][5]</sup>. Although HashiCorp has stated that Terraform will remain open-source "for now", this status could change at any time.

In response to this development, [OpenTofu](https://opentofu.org/manifesto/){:target="_blank"} emerged as an initiative to maintain Terraform's open-source and community-driven nature under the management of the Linux Foundation. OpenTofu, formerly known as OpenTF, was recently forked from Terraform, resulting in the two projects being essentially equivalent at this stage. [Read more](https://www.env0.com/blog/opentofu-the-open-source-terraform-alternative).

The community has expressed considerable backlash against Terraform's shift to the BSL license, indicating potential changes in this space and a shift in attitudes towards Terraform. This situation could lead to a broader adoption of OpenTofu or possibly increased interest in alternative technologies such as Pulumi.

## References
- [1] [https://www.itpro.com/business/acquisition/everything-you-need-to-know-about-ibms-bid-for-hashicorp](https://www.itpro.com/business/acquisition/everything-you-need-to-know-about-ibms-bid-for-hashicorp){:target="_blank"}
- [2] [https://www.forbes.com/sites/rscottraynovich/2024/04/25/what-ibms-deal-for-hashicorp-means-for-the-cloud-infra-battle/](https://www.forbes.com/sites/rscottraynovich/2024/04/25/what-ibms-deal-for-hashicorp-means-for-the-cloud-infra-battle/){:target="_blank"}
- [3] [https://www.techrepublic.com/article/ibm-hashicorp-acquisition/](https://www.techrepublic.com/article/ibm-hashicorp-acquisition/){:target="_blank"}
- [4] [https://www.hashicorp.com/blog/hashicorp-updates-licensing-faq-based-on-community-questions](https://www.hashicorp.com/blog/hashicorp-updates-licensing-faq-based-on-community-questions){:target="_blank"}
- [5] [https://www.theregister.com/2023/08/11/hashicorp_bsl_licence/](https://www.theregister.com/2023/08/11/hashicorp_bsl_licence/){:target="_blank"}

## Credits

### Thanks!
With thanks to my colleagues Brian Myburgh, Jon Parish, Othman Alkhamra & Rahul Parkar, who gave me their time & invaluable insights into experiences of our client engagements at 101 Ways. It was (as ever with tech) a divisive topic full of nuance - while the views expressed here are my personal take, I deeply appreciate all the thoughtful contributions you made. Thanks for the great discussions and alternative viewpoints!

### Post Photo
Post photo by <a href="https://unsplash.com/@cgower?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Christopher Gower</a> on <a href="https://unsplash.com/photos/a-macbook-with-lines-of-code-on-its-screen-on-a-busy-desk-m_HRfLhgABo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  