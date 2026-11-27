# Plan — Funniest Autocorrect Fail (u-zeroxfive-funniest-autocorrect-fail-ddf82154)

## Architecture
main.ts (Node 22, zero deps): holds the chosen line as a string constant, writes it
to /output/entry.txt (mkdir -p), no trailing newline, then validates 1-199 chars
(code points), UTF-8, not whitespace-only, and re-reads the file to confirm
byte-equality with the constant.

## Deciding metric + target
Pairwise judge win on criteria 2-5, margin 4-5. The wrong word must be instantly
visible, a real-word swap a phone keyboard plausibly makes, flip the sentence's
meaning while keeping it grammatical, and need zero explanation.

## Winner pattern imitated + weakness beaten
Strongest fails are real automated-text formats (clinic/funeral reminders) where one
word inverts the meaning. Weakness of typical entries: the wrong word is a crude
typo or a tired classic, and the setup eats half the line. Beaten with a one-word
prefix swap (appointment -> disappointment) inside a confirmation SMS, where the
setup IS the joke vehicle.

## Candidates (scored criteria 2-5)
1. Doctor "disappointment" — 19 (PICKED)
2. Funeral "horse" — 19 (loses tie on criterion 3: hearse->horse is a 2-letter change)
3. Vet "nurturing" — 17; 4. Wedding "cows" — 15; 5. Funeral "basket" — 16;
6. "condiments" — 16 (known meme); 7. Mechanic "breaks" — 16; 8. Daycare "vacation" — 14;
9. Dentist "feeling" — 14; 10. Landlord "leek" — 17.

## Chosen line (98 chars, 98 bytes)
Hi Mrs. Chen, your disappointment is confirmed for Tuesday at 3pm. Please arrive 15 minutes early.

## Edge cases tested
Char count 1-199 (code points), no trailing newline, UTF-8 only, file re-read
matches, two runs byte-identical, runs from a clean cwd.
