import tap from "tap";
import alt from "../dist/html-img-alt.esm";

// opts.unfancyTheAltContents
// -----------------------------------------------------------------------------

tap.test("01 - cleans alt tag contents - fancy quote", (t) => {
  t.same(
    alt('<img alt    ="   someone’s " >'),
    '<img alt="someone\'s" >',
    "01.01 - default"
  );
  t.same(
    alt('<img alt    ="   someone’s " >', { unfancyTheAltContents: true }),
    '<img alt="someone\'s" >',
    "01.02 - hardcoded default, unfancyTheAltContents on"
  );
  t.same(
    alt('<img alt    ="   someone’s " >', { unfancyTheAltContents: false }),
    '<img alt="   someone’s " >',
    "01.03 - unfancyTheAltContents off - no character substitution, no trim"
  );
  t.end();
});

tap.test("02 - cleans alt tag contents - m-dash + trim", (t) => {
  t.same(
    alt('<img alt    =" The new offer \u2014 50% discount " >'),
    '<img alt="The new offer - 50% discount" >',
    "02.01 - default"
  );
  t.same(
    alt('<img alt    =" The new offer \u2014 50% discount " >'),
    '<img alt="The new offer - 50% discount" >',
    "02.02 - hardcoded default, unfancyTheAltContents on"
  );
  t.same(
    alt('<img alt    =" The new offer \u2014 50% discount " >', {
      unfancyTheAltContents: false,
    }),
    '<img alt=" The new offer \u2014 50% discount " >',
    "02.03 - unfancyTheAltContents off - no character substitution, no trimming done"
  );
  t.end();
});

tap.test("03 - un-fancies multiple alt tags", (t) => {
  t.same(
    alt(
      'abc <img alt    ="   someone’s " > def\n <img alt    =" The new offer \u2014 50% discount " > ghi <img      >\n\n\njkl'
    ),
    'abc <img alt="someone\'s" > def\n <img alt="The new offer - 50% discount" > ghi <img alt="" >\n\n\njkl',
    "03 - default"
  );
  t.end();
});

tap.test("04 - adds an ALT within a nunjucks-sprinkled HTML", (t) => {
  t.same(
    alt(
      '<img {% if m.n_o %}class="x-y"{% else %}id="a db-c d" style="display: block;"{% endif %}></td>'
    ),
    '<img {% if m.n_o %}class="x-y"{% else %}id="a db-c d" style="display: block;"{% endif %} alt="" ></td>',
    "04.01 - minime of 18.04.02"
  );
  t.same(
    alt(
      '<td class="anything-here" background="{%- include "partials/zzz.nunjucks" -%}" bgcolor="{{ color }}" height="{{ something_here }}" valign="top" style="background-image: url({%- include "partials/partials-location.nunjucks" -%}); background-position: top center; background-repeat: no-repeat; font-size: 0; line-height: 0;" align="center"><img {% if something.is_right %}class="right-class"{% else %}id="alternative dont-know-why-i-put-id here" style="display: block;"{% endif %}></td>'
    ),
    '<td class="anything-here" background="{%- include "partials/zzz.nunjucks" -%}" bgcolor="{{ color }}" height="{{ something_here }}" valign="top" style="background-image: url({%- include "partials/partials-location.nunjucks" -%}); background-position: top center; background-repeat: no-repeat; font-size: 0; line-height: 0;" align="center"><img {% if something.is_right %}class="right-class"{% else %}id="alternative dont-know-why-i-put-id here" style="display: block;"{% endif %} alt="" ></td>',
    "04.02"
  );
  t.end();
});

tap.test(
  '05 - Nunjucks code following straight after character g of "img"',
  (t) => {
    t.same(
      alt(
        '<img{% if not state_colour_col %} class="test"{% endif %} style="display: block;">'
      ),
      '<img{% if not state_colour_col %} class="test"{% endif %} style="display: block;" alt="" >',
      "05"
    );
    t.end();
  }
);

tap.test("06 - Nunjucks code tight before ALT", (t) => {
  t.same(
    alt('<img {% if variables %}class="variables" {% endif %}alt=>'),
    '<img {% if variables %}class="variables" {% endif %}alt="" >',
    "06.01 - alt with equal with no quotes"
  );
  t.same(
    alt('<img {% if variables %}class="variables" {% endif %}alt=">'),
    '<img {% if variables %}class="variables" {% endif %}alt="" >',
    "06.02 - alt with equal and single quote, second is missing"
  );
  t.same(
    alt('<img {% if variables %}class="variables" {% endif %}alt>'),
    '<img {% if variables %}class="variables" {% endif %}alt="" >',
    "06.03 - alt with both equal and quotes missing"
  );
  t.end();
});