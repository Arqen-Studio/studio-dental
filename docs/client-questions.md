# Open questions for the client

Everything the website still needs from Studio Dental, grouped by who can
answer it. Nothing on this list is invented content waiting for approval: it is
all either missing, ambiguous, or unverified.

Last updated 26 September 2026.

## Photography and video

1. **A team photograph for each branch.** The doctors page is split into a DHA
   Phase II panel and an F-7 Markaz panel, so one group shot will not cover
   both. Landscape, whole team, shot wide enough to crop: the panels run at
   roughly 1.8:1. Until these arrive both panels show clinic interiors.
2. **Which branch is each video clip?** The bulk upload was not labelled by
   branch, and the walkaround was described only as "that walk around entrance
   shot of the clinic". Knowing which clips are DHA and which are F-7 unblocks
   branch specific stills across the whole site.
3. **Photographs for Dr. Nayab Farooq, Dr. Arfa Rehman and Dr. Rabia.** Their
   cards currently have no portrait.
4. **Around twenty remaining stock photographs.** The gallery, news, about,
   service detail, prices and clinics pages still use bought stock. None of it
   is Studio Dental. Either more footage or a photo shoot would clear it.

## Doctors

5. **Dr. Rabia**: full name, branch, and a completed profile form.
6. **Profile forms for six doctors**: Dr. Umair, Dr. Rida, Dr. Maria,
   Dr. Mashal, Dr. Abeera, Dr. Shayzmin. Their cards currently carry a name and
   photograph only. Five of the six also need a surname.
7. **Does Dr. Hassan Ali work at the clinic?** He was on an early list but has
   no form and no photograph. Dr. Nayab Farooq was nearly dropped for the same
   reason and turned out to have been there since the beginning.
8. **Dr. Zainab Qureshi**: confirm which treatments to list against her.
9. **Dr. Nayab Farooq**: should she appear on the children's dentistry page?
10. **Dr. Yousaf Kamal**: memberships and training to list.
11. **Dr. Aqsa Malik**: a personal line for her profile, if she wants one.

## Prices and services

12. **Two blank F-7 rates**: fluoride varnish and kids cleaning have no price on
    the F-7 list. Are they not offered there, or was the price omitted?
13. **Kids cleaning does not appear on the DHA list at all.** Offered or not?
14. **Confirm branch coverage.** The lists imply F-7 does not do braces. Is that
    right, or is the list incomplete?
15. **Clinical review of the procedure steps.** The step by step text on each
    service page was written by us from the price lists. A dentist should read
    it before launch.

## Doctor to treatment tagging

The doctors page filter used the ten labels from question 7 of the profile
form. That list was written before the price lists settled what we offer, and
four of its labels (Cosmetic Dentistry, Smile Design, Facial Aesthetics,
General Dentistry) are not services either branch prices. The eight returned
forms have been remapped onto the nine real services, and the filter now offers
only those. The mapping used was:

| Form answer | Mapped to |
| --- | --- |
| Implants | Dental Implantation |
| Aligners | Teeth Straightening |
| Root Canal | Root Canal Treatment |
| Oral Surgery | Tooth Extraction |
| Preventive Care | Oral Hygiene & Whitening |
| Restorative Dentistry | Dental Fillings |
| Cosmetic Dentistry, Smile Design | Aesthetic Dental Fillings |
| General Dentistry | nothing, see question 21 |
| Facial Aesthetics | nothing, see question 22 |

### Where each doctor's tags actually came from

Checked against the source documents, not assumed. Only four of the eight are
supported by something the doctor supplied.

| Doctor | Source | Confidence |
| --- | --- | --- |
| Dr. Arfa Rehman | Typed her answer to question 7 | Confirmed |
| Dr. Zainab Qureshi | Underlined nine of the ten labels in question 7 | Confirmed |
| Dr. Yousaf Kamal | His own "Areas of Expertise" list | Confirmed |
| Dr. Aqsa Malik | Her own biography, which names restorative, aesthetic and preventive work | Confirmed |
| Dr. Amna Hassan | Question 7 blank. Tags inferred from her question 8 answer, which names wisdom and complex extractions and oral surgical procedures | Partly supported |
| Dr. Rabia | A handwritten note saying aligners | Single tag, from the clinic |
| Dr. Nayab Farooq | **Question 7 is blank.** The underlining in her form is the template's own styling and covers the instructions too, so it marks nothing | **Not supported** |
| Dr. Syeda Alizeh Hassan | **Question 7 is blank.** Nothing is marked or written | **Not supported** |

20. **Dr. Nayab Farooq and Dr. Syeda Alizeh Hassan have treatments listed on
    the site that neither of them supplied.** They need to answer question 7,
    or their tags should come off. This is the most important item on this
    page: it is a claim about what a named clinician does.
21. **Dr. Amna Hassan's tags are inferred from her question 8 answer**, not
    from question 7. Please confirm them.
22. **Please confirm the mapping above**, and confirm each doctor's treatments
    against the nine services rather than the old ten labels.
23. **"General Dentistry" was treated as an umbrella and dropped.** Seven of the
    eight doctors who ticked it also ticked Restorative or Preventive Care, so
    nothing was lost. The exception is **Dr. Amna Hassan**: she ticked General
    Dentistry and Preventive Care but not Restorative, so she is not currently
    listed for fillings. Does she do fillings?
24. **"Facial Aesthetics" was ticked by Dr. Amna, Dr. Nayab and Dr. Zainab but
    is not priced at either branch.** Is it offered? If so it needs a price and
    a page. If not, it should come off the form.
25. **No doctor is tagged for Children's Dentistry**, although it is priced at
    both branches and has its own page. Who performs it?
26. **Prosthetics (crowns, veneers, bridges) has only one doctor**, Dr. Yousaf
    Kamal, whose own expertise list names crowns, bridges and prosthodontic
    rehabilitation. It is priced at both branches, so who else performs it?
27. **Six doctors have no treatments recorded at all** (Umair, Rida, Maria,
    Mashal, Abeera, Shayzmin), so they disappear the moment a visitor uses the
    filter. This resolves itself once their forms come back.

## Copy

16. **What does "17+ years" refer to?** The clinic, Dr. Yousaf's career, or
    something else. It appears on the homepage and the clinic hub.
17. **Homepage headline approval**: "Dentistry you can trust, in the heart of
    Islamabad".
18. **The clinic hub cards all read "CLINICS"** above Services, Prices, Doctors,
    About us, News and Contacts. It fits none of them. What should it say, or
    should it come out?

## Legal

28. **There is no privacy policy.** Both consent checkboxes asked visitors to
    agree to "the privacy policy of Studio Dental" and linked to the contact
    page, which is not one. The forms collect a name, an email address, a phone
    number and free text about a dental problem, so a policy is needed before
    launch. The text is unlinked until the clinic supplies one. We cannot write
    it: it is a legal document about how the clinic handles patient data.

## Not a client question, but blocking

19. **`RESEND_API_KEY` is not set in Vercel.** Until it is, every contact form on
    the site accepts a submission and sends nothing.
