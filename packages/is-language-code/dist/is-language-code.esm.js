/**
 * is-language-code
 * Is given string a language code (as per IANA)
 * Version: 3.0.5
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/is-language-code/
 */

var version$1 = "3.0.5";

var languageJson = ["aa", "aaa", "aab", "aac", "aad", "aae", "aaf", "aag", "aah", "aai", "aak", "aal", "aam", "aan", "aao", "aap", "aaq", "aas", "aat", "aau", "aav", "aaw", "aax", "aaz", "ab", "aba", "abb", "abc", "abd", "abe", "abf", "abg", "abh", "abi", "abj", "abl", "abm", "abn", "abo", "abp", "abq", "abr", "abs", "abt", "abu", "abv", "abw", "abx", "aby", "abz", "aca", "acb", "acd", "ace", "acf", "ach", "aci", "ack", "acl", "acm", "acn", "acp", "acq", "acr", "acs", "act", "acu", "acv", "acw", "acx", "acy", "acz", "ada", "adb", "add", "ade", "adf", "adg", "adh", "adi", "adj", "adl", "adn", "ado", "adp", "adq", "adr", "ads", "adt", "adu", "adw", "adx", "ady", "adz", "ae", "aea", "aeb", "aec", "aed", "aee", "aek", "ael", "aem", "aen", "aeq", "aer", "aes", "aeu", "aew", "aey", "aez", "af", "afa", "afb", "afd", "afe", "afg", "afh", "afi", "afk", "afn", "afo", "afp", "afs", "aft", "afu", "afz", "aga", "agb", "agc", "agd", "age", "agf", "agg", "agh", "agi", "agj", "agk", "agl", "agm", "agn", "ago", "agp", "agq", "agr", "ags", "agt", "agu", "agv", "agw", "agx", "agy", "agz", "aha", "ahb", "ahg", "ahh", "ahi", "ahk", "ahl", "ahm", "ahn", "aho", "ahp", "ahr", "ahs", "aht", "aia", "aib", "aic", "aid", "aie", "aif", "aig", "aih", "aii", "aij", "aik", "ail", "aim", "ain", "aio", "aip", "aiq", "air", "ais", "ait", "aiw", "aix", "aiy", "aja", "ajg", "aji", "ajn", "ajp", "ajt", "aju", "ajw", "ajz", "ak", "akb", "akc", "akd", "ake", "akf", "akg", "akh", "aki", "akj", "akk", "akl", "akm", "ako", "akp", "akq", "akr", "aks", "akt", "aku", "akv", "akw", "akx", "aky", "akz", "ala", "alc", "ald", "ale", "alf", "alg", "alh", "ali", "alj", "alk", "all", "alm", "aln", "alo", "alp", "alq", "alr", "als", "alt", "alu", "alv", "alw", "alx", "aly", "alz", "am", "ama", "amb", "amc", "ame", "amf", "amg", "ami", "amj", "amk", "aml", "amm", "amn", "amo", "amp", "amq", "amr", "ams", "amt", "amu", "amv", "amw", "amx", "amy", "amz", "an", "ana", "anb", "anc", "and", "ane", "anf", "ang", "anh", "ani", "anj", "ank", "anl", "anm", "ann", "ano", "anp", "anq", "anr", "ans", "ant", "anu", "anv", "anw", "anx", "any", "anz", "aoa", "aob", "aoc", "aod", "aoe", "aof", "aog", "aoh", "aoi", "aoj", "aok", "aol", "aom", "aon", "aor", "aos", "aot", "aou", "aox", "aoz", "apa", "apb", "apc", "apd", "ape", "apf", "apg", "aph", "api", "apj", "apk", "apl", "apm", "apn", "apo", "app", "apq", "apr", "aps", "apt", "apu", "apv", "apw", "apx", "apy", "apz", "aqa", "aqc", "aqd", "aqg", "aql", "aqm", "aqn", "aqp", "aqr", "aqt", "aqz", "ar", "arb", "arc", "ard", "are", "arh", "ari", "arj", "ark", "arl", "arn", "aro", "arp", "arq", "arr", "ars", "art", "aru", "arv", "arw", "arx", "ary", "arz", "as", "asa", "asb", "asc", "asd", "ase", "asf", "asg", "ash", "asi", "asj", "ask", "asl", "asn", "aso", "asp", "asq", "asr", "ass", "ast", "asu", "asv", "asw", "asx", "asy", "asz", "ata", "atb", "atc", "atd", "ate", "atg", "ath", "ati", "atj", "atk", "atl", "atm", "atn", "ato", "atp", "atq", "atr", "ats", "att", "atu", "atv", "atw", "atx", "aty", "atz", "aua", "aub", "auc", "aud", "aue", "auf", "aug", "auh", "aui", "auj", "auk", "aul", "aum", "aun", "auo", "aup", "auq", "aur", "aus", "aut", "auu", "auw", "aux", "auy", "auz", "av", "avb", "avd", "avi", "avk", "avl", "avm", "avn", "avo", "avs", "avt", "avu", "avv", "awa", "awb", "awc", "awd", "awe", "awg", "awh", "awi", "awk", "awm", "awn", "awo", "awr", "aws", "awt", "awu", "awv", "aww", "awx", "awy", "axb", "axe", "axg", "axk", "axl", "axm", "axx", "ay", "aya", "ayb", "ayc", "ayd", "aye", "ayg", "ayh", "ayi", "ayk", "ayl", "ayn", "ayo", "ayp", "ayq", "ayr", "ays", "ayt", "ayu", "ayx", "ayy", "ayz", "az", "aza", "azb", "azc", "azd", "azg", "azj", "azm", "azn", "azo", "azt", "azz", "ba", "baa", "bab", "bac", "bad", "bae", "baf", "bag", "bah", "bai", "baj", "bal", "ban", "bao", "bap", "bar", "bas", "bat", "bau", "bav", "baw", "bax", "bay", "baz", "bba", "bbb", "bbc", "bbd", "bbe", "bbf", "bbg", "bbh", "bbi", "bbj", "bbk", "bbl", "bbm", "bbn", "bbo", "bbp", "bbq", "bbr", "bbs", "bbt", "bbu", "bbv", "bbw", "bbx", "bby", "bbz", "bca", "bcb", "bcc", "bcd", "bce", "bcf", "bcg", "bch", "bci", "bcj", "bck", "bcl", "bcm", "bcn", "bco", "bcp", "bcq", "bcr", "bcs", "bct", "bcu", "bcv", "bcw", "bcy", "bcz", "bda", "bdb", "bdc", "bdd", "bde", "bdf", "bdg", "bdh", "bdi", "bdj", "bdk", "bdl", "bdm", "bdn", "bdo", "bdp", "bdq", "bdr", "bds", "bdt", "bdu", "bdv", "bdw", "bdx", "bdy", "bdz", "be", "bea", "beb", "bec", "bed", "bee", "bef", "beg", "beh", "bei", "bej", "bek", "bem", "beo", "bep", "beq", "ber", "bes", "bet", "beu", "bev", "bew", "bex", "bey", "bez", "bfa", "bfb", "bfc", "bfd", "bfe", "bff", "bfg", "bfh", "bfi", "bfj", "bfk", "bfl", "bfm", "bfn", "bfo", "bfp", "bfq", "bfr", "bfs", "bft", "bfu", "bfw", "bfx", "bfy", "bfz", "bg", "bga", "bgb", "bgc", "bgd", "bge", "bgf", "bgg", "bgi", "bgj", "bgk", "bgl", "bgm", "bgn", "bgo", "bgp", "bgq", "bgr", "bgs", "bgt", "bgu", "bgv", "bgw", "bgx", "bgy", "bgz", "bh", "bha", "bhb", "bhc", "bhd", "bhe", "bhf", "bhg", "bhh", "bhi", "bhj", "bhk", "bhl", "bhm", "bhn", "bho", "bhp", "bhq", "bhr", "bhs", "bht", "bhu", "bhv", "bhw", "bhx", "bhy", "bhz", "bi", "bia", "bib", "bic", "bid", "bie", "bif", "big", "bij", "bik", "bil", "bim", "bin", "bio", "bip", "biq", "bir", "bit", "biu", "biv", "biw", "bix", "biy", "biz", "bja", "bjb", "bjc", "bjd", "bje", "bjf", "bjg", "bjh", "bji", "bjj", "bjk", "bjl", "bjm", "bjn", "bjo", "bjp", "bjq", "bjr", "bjs", "bjt", "bju", "bjv", "bjw", "bjx", "bjy", "bjz", "bka", "bkb", "bkc", "bkd", "bkf", "bkg", "bkh", "bki", "bkj", "bkk", "bkl", "bkm", "bkn", "bko", "bkp", "bkq", "bkr", "bks", "bkt", "bku", "bkv", "bkw", "bkx", "bky", "bkz", "bla", "blb", "blc", "bld", "ble", "blf", "blg", "blh", "bli", "blj", "blk", "bll", "blm", "bln", "blo", "blp", "blq", "blr", "bls", "blt", "blv", "blw", "blx", "bly", "blz", "bm", "bma", "bmb", "bmc", "bmd", "bme", "bmf", "bmg", "bmh", "bmi", "bmj", "bmk", "bml", "bmm", "bmn", "bmo", "bmp", "bmq", "bmr", "bms", "bmt", "bmu", "bmv", "bmw", "bmx", "bmy", "bmz", "bn", "bna", "bnb", "bnc", "bnd", "bne", "bnf", "bng", "bni", "bnj", "bnk", "bnl", "bnm", "bnn", "bno", "bnp", "bnq", "bnr", "bns", "bnt", "bnu", "bnv", "bnw", "bnx", "bny", "bnz", "bo", "boa", "bob", "boe", "bof", "bog", "boh", "boi", "boj", "bok", "bol", "bom", "bon", "boo", "bop", "boq", "bor", "bot", "bou", "bov", "bow", "box", "boy", "boz", "bpa", "bpb", "bpd", "bpg", "bph", "bpi", "bpj", "bpk", "bpl", "bpm", "bpn", "bpo", "bpp", "bpq", "bpr", "bps", "bpt", "bpu", "bpv", "bpw", "bpx", "bpy", "bpz", "bqa", "bqb", "bqc", "bqd", "bqf", "bqg", "bqh", "bqi", "bqj", "bqk", "bql", "bqm", "bqn", "bqo", "bqp", "bqq", "bqr", "bqs", "bqt", "bqu", "bqv", "bqw", "bqx", "bqy", "bqz", "br", "bra", "brb", "brc", "brd", "brf", "brg", "brh", "bri", "brj", "brk", "brl", "brm", "brn", "bro", "brp", "brq", "brr", "brs", "brt", "bru", "brv", "brw", "brx", "bry", "brz", "bs", "bsa", "bsb", "bsc", "bse", "bsf", "bsg", "bsh", "bsi", "bsj", "bsk", "bsl", "bsm", "bsn", "bso", "bsp", "bsq", "bsr", "bss", "bst", "bsu", "bsv", "bsw", "bsx", "bsy", "bta", "btb", "btc", "btd", "bte", "btf", "btg", "bth", "bti", "btj", "btk", "btl", "btm", "btn", "bto", "btp", "btq", "btr", "bts", "btt", "btu", "btv", "btw", "btx", "bty", "btz", "bua", "bub", "buc", "bud", "bue", "buf", "bug", "buh", "bui", "buj", "buk", "bum", "bun", "buo", "bup", "buq", "bus", "but", "buu", "buv", "buw", "bux", "buy", "buz", "bva", "bvb", "bvc", "bvd", "bve", "bvf", "bvg", "bvh", "bvi", "bvj", "bvk", "bvl", "bvm", "bvn", "bvo", "bvp", "bvq", "bvr", "bvt", "bvu", "bvv", "bvw", "bvx", "bvy", "bvz", "bwa", "bwb", "bwc", "bwd", "bwe", "bwf", "bwg", "bwh", "bwi", "bwj", "bwk", "bwl", "bwm", "bwn", "bwo", "bwp", "bwq", "bwr", "bws", "bwt", "bwu", "bww", "bwx", "bwy", "bwz", "bxa", "bxb", "bxc", "bxd", "bxe", "bxf", "bxg", "bxh", "bxi", "bxj", "bxk", "bxl", "bxm", "bxn", "bxo", "bxp", "bxq", "bxr", "bxs", "bxu", "bxv", "bxw", "bxx", "bxz", "bya", "byb", "byc", "byd", "bye", "byf", "byg", "byh", "byi", "byj", "byk", "byl", "bym", "byn", "byo", "byp", "byq", "byr", "bys", "byt", "byv", "byw", "byx", "byy", "byz", "bza", "bzb", "bzc", "bzd", "bze", "bzf", "bzg", "bzh", "bzi", "bzj", "bzk", "bzl", "bzm", "bzn", "bzo", "bzp", "bzq", "bzr", "bzs", "bzt", "bzu", "bzv", "bzw", "bzx", "bzy", "bzz", "ca", "caa", "cab", "cac", "cad", "cae", "caf", "cag", "cah", "cai", "caj", "cak", "cal", "cam", "can", "cao", "cap", "caq", "car", "cas", "cau", "cav", "caw", "cax", "cay", "caz", "cba", "cbb", "cbc", "cbd", "cbe", "cbg", "cbh", "cbi", "cbj", "cbk", "cbl", "cbn", "cbo", "cbq", "cbr", "cbs", "cbt", "cbu", "cbv", "cbw", "cby", "cca", "ccc", "ccd", "cce", "ccg", "cch", "ccj", "ccl", "ccm", "ccn", "cco", "ccp", "ccq", "ccr", "ccs", "cda", "cdc", "cdd", "cde", "cdf", "cdg", "cdh", "cdi", "cdj", "cdm", "cdn", "cdo", "cdr", "cds", "cdy", "cdz", "ce", "cea", "ceb", "ceg", "cek", "cel", "cen", "cet", "cey", "cfa", "cfd", "cfg", "cfm", "cga", "cgc", "cgg", "cgk", "ch", "chb", "chc", "chd", "chf", "chg", "chh", "chj", "chk", "chl", "chm", "chn", "cho", "chp", "chq", "chr", "cht", "chw", "chx", "chy", "chz", "cia", "cib", "cic", "cid", "cie", "cih", "cik", "cim", "cin", "cip", "cir", "ciw", "ciy", "cja", "cje", "cjh", "cji", "cjk", "cjm", "cjn", "cjo", "cjp", "cjr", "cjs", "cjv", "cjy", "cka", "ckb", "ckh", "ckl", "ckn", "cko", "ckq", "ckr", "cks", "ckt", "cku", "ckv", "ckx", "cky", "ckz", "cla", "clc", "cld", "cle", "clh", "cli", "clj", "clk", "cll", "clm", "clo", "clt", "clu", "clw", "cly", "cma", "cmc", "cme", "cmg", "cmi", "cmk", "cml", "cmm", "cmn", "cmo", "cmr", "cms", "cmt", "cna", "cnb", "cnc", "cng", "cnh", "cni", "cnk", "cnl", "cno", "cnr", "cns", "cnt", "cnu", "cnw", "cnx", "co", "coa", "cob", "coc", "cod", "coe", "cof", "cog", "coh", "coj", "cok", "col", "com", "con", "coo", "cop", "coq", "cot", "cou", "cov", "cow", "cox", "coy", "coz", "cpa", "cpb", "cpc", "cpe", "cpf", "cpg", "cpi", "cpn", "cpo", "cpp", "cps", "cpu", "cpx", "cpy", "cqd", "cqu", "cr", "cra", "crb", "crc", "crd", "crf", "crg", "crh", "cri", "crj", "crk", "crl", "crm", "crn", "cro", "crp", "crq", "crr", "crs", "crt", "crv", "crw", "crx", "cry", "crz", "cs", "csa", "csb", "csc", "csd", "cse", "csf", "csg", "csh", "csi", "csj", "csk", "csl", "csm", "csn", "cso", "csq", "csr", "css", "cst", "csu", "csv", "csw", "csy", "csz", "cta", "ctc", "ctd", "cte", "ctg", "cth", "ctl", "ctm", "ctn", "cto", "ctp", "cts", "ctt", "ctu", "ctz", "cu", "cua", "cub", "cuc", "cug", "cuh", "cui", "cuj", "cuk", "cul", "cum", "cuo", "cup", "cuq", "cur", "cus", "cut", "cuu", "cuv", "cuw", "cux", "cuy", "cv", "cvg", "cvn", "cwa", "cwb", "cwd", "cwe", "cwg", "cwt", "cy", "cya", "cyb", "cyo", "czh", "czk", "czn", "czo", "czt", "da", "daa", "dac", "dad", "dae", "daf", "dag", "dah", "dai", "daj", "dak", "dal", "dam", "dao", "dap", "daq", "dar", "das", "dau", "dav", "daw", "dax", "day", "daz", "dba", "dbb", "dbd", "dbe", "dbf", "dbg", "dbi", "dbj", "dbl", "dbm", "dbn", "dbo", "dbp", "dbq", "dbr", "dbt", "dbu", "dbv", "dbw", "dby", "dcc", "dcr", "dda", "ddd", "dde", "ddg", "ddi", "ddj", "ddn", "ddo", "ddr", "dds", "ddw", "de", "dec", "ded", "dee", "def", "deg", "deh", "dei", "dek", "del", "dem", "den", "dep", "deq", "der", "des", "dev", "dez", "dga", "dgb", "dgc", "dgd", "dge", "dgg", "dgh", "dgi", "dgk", "dgl", "dgn", "dgo", "dgr", "dgs", "dgt", "dgu", "dgw", "dgx", "dgz", "dha", "dhd", "dhg", "dhi", "dhl", "dhm", "dhn", "dho", "dhr", "dhs", "dhu", "dhv", "dhw", "dhx", "dia", "dib", "dic", "did", "dif", "dig", "dih", "dii", "dij", "dik", "dil", "dim", "din", "dio", "dip", "diq", "dir", "dis", "dit", "diu", "diw", "dix", "diy", "diz", "dja", "djb", "djc", "djd", "dje", "djf", "dji", "djj", "djk", "djl", "djm", "djn", "djo", "djr", "dju", "djw", "dka", "dkk", "dkl", "dkr", "dks", "dkx", "dlg", "dlk", "dlm", "dln", "dma", "dmb", "dmc", "dmd", "dme", "dmg", "dmk", "dml", "dmm", "dmn", "dmo", "dmr", "dms", "dmu", "dmv", "dmw", "dmx", "dmy", "dna", "dnd", "dne", "dng", "dni", "dnj", "dnk", "dnn", "dno", "dnr", "dnt", "dnu", "dnv", "dnw", "dny", "doa", "dob", "doc", "doe", "dof", "doh", "doi", "dok", "dol", "don", "doo", "dop", "doq", "dor", "dos", "dot", "dov", "dow", "dox", "doy", "doz", "dpp", "dra", "drb", "drc", "drd", "dre", "drg", "drh", "dri", "drl", "drn", "dro", "drq", "drr", "drs", "drt", "dru", "drw", "dry", "dsb", "dse", "dsh", "dsi", "dsl", "dsn", "dso", "dsq", "dta", "dtb", "dtd", "dth", "dti", "dtk", "dtm", "dtn", "dto", "dtp", "dtr", "dts", "dtt", "dtu", "dty", "dua", "dub", "duc", "dud", "due", "duf", "dug", "duh", "dui", "duj", "duk", "dul", "dum", "dun", "duo", "dup", "duq", "dur", "dus", "duu", "duv", "duw", "dux", "duy", "duz", "dv", "dva", "dwa", "dwl", "dwr", "dws", "dwu", "dww", "dwy", "dwz", "dya", "dyb", "dyd", "dyg", "dyi", "dym", "dyn", "dyo", "dyu", "dyy", "dz", "dza", "dzd", "dze", "dzg", "dzl", "dzn", "eaa", "ebg", "ebk", "ebo", "ebr", "ebu", "ecr", "ecs", "ecy", "ee", "eee", "efa", "efe", "efi", "ega", "egl", "ego", "egx", "egy", "ehu", "eip", "eit", "eiv", "eja", "eka", "ekc", "eke", "ekg", "eki", "ekk", "ekl", "ekm", "eko", "ekp", "ekr", "eky", "el", "ele", "elh", "eli", "elk", "elm", "elo", "elp", "elu", "elx", "ema", "emb", "eme", "emg", "emi", "emk", "emm", "emn", "emo", "emp", "ems", "emu", "emw", "emx", "emy", "en", "ena", "enb", "enc", "end", "enf", "enh", "enl", "enm", "enn", "eno", "enq", "enr", "enu", "env", "enw", "enx", "eo", "eot", "epi", "era", "erg", "erh", "eri", "erk", "ero", "err", "ers", "ert", "erw", "es", "ese", "esg", "esh", "esi", "esk", "esl", "esm", "esn", "eso", "esq", "ess", "esu", "esx", "esy", "et", "etb", "etc", "eth", "etn", "eto", "etr", "ets", "ett", "etu", "etx", "etz", "eu", "euq", "eve", "evh", "evn", "ewo", "ext", "eya", "eyo", "eza", "eze", "fa", "faa", "fab", "fad", "faf", "fag", "fah", "fai", "faj", "fak", "fal", "fam", "fan", "fap", "far", "fat", "fau", "fax", "fay", "faz", "fbl", "fcs", "fer", "ff", "ffi", "ffm", "fgr", "fi", "fia", "fie", "fil", "fip", "fir", "fit", "fiu", "fiw", "fj", "fkk", "fkv", "fla", "flh", "fli", "fll", "fln", "flr", "fly", "fmp", "fmu", "fnb", "fng", "fni", "fo", "fod", "foi", "fom", "fon", "for", "fos", "fox", "fpe", "fqs", "fr", "frc", "frd", "frk", "frm", "fro", "frp", "frq", "frr", "frs", "frt", "fse", "fsl", "fss", "fub", "fuc", "fud", "fue", "fuf", "fuh", "fui", "fuj", "fum", "fun", "fuq", "fur", "fut", "fuu", "fuv", "fuy", "fvr", "fwa", "fwe", "fy", "ga", "gaa", "gab", "gac", "gad", "gae", "gaf", "gag", "gah", "gai", "gaj", "gak", "gal", "gam", "gan", "gao", "gap", "gaq", "gar", "gas", "gat", "gau", "gav", "gaw", "gax", "gay", "gaz", "gba", "gbb", "gbc", "gbd", "gbe", "gbf", "gbg", "gbh", "gbi", "gbj", "gbk", "gbl", "gbm", "gbn", "gbo", "gbp", "gbq", "gbr", "gbs", "gbu", "gbv", "gbw", "gbx", "gby", "gbz", "gcc", "gcd", "gce", "gcf", "gcl", "gcn", "gcr", "gct", "gd", "gda", "gdb", "gdc", "gdd", "gde", "gdf", "gdg", "gdh", "gdi", "gdj", "gdk", "gdl", "gdm", "gdn", "gdo", "gdq", "gdr", "gds", "gdt", "gdu", "gdx", "gea", "geb", "gec", "ged", "geg", "geh", "gei", "gej", "gek", "gel", "gem", "geq", "ges", "gev", "gew", "gex", "gey", "gez", "gfk", "gft", "gfx", "gga", "ggb", "ggd", "gge", "ggg", "ggk", "ggl", "ggn", "ggo", "ggr", "ggt", "ggu", "ggw", "gha", "ghc", "ghe", "ghh", "ghk", "ghl", "ghn", "gho", "ghr", "ghs", "ght", "gia", "gib", "gic", "gid", "gie", "gig", "gih", "gil", "gim", "gin", "gio", "gip", "giq", "gir", "gis", "git", "giu", "giw", "gix", "giy", "giz", "gji", "gjk", "gjm", "gjn", "gjr", "gju", "gka", "gkd", "gke", "gkn", "gko", "gkp", "gku", "gl", "glc", "gld", "glh", "gli", "glj", "glk", "gll", "glo", "glr", "glu", "glw", "gly", "gma", "gmb", "gmd", "gme", "gmg", "gmh", "gml", "gmm", "gmn", "gmq", "gmu", "gmv", "gmw", "gmx", "gmy", "gmz", "gn", "gna", "gnb", "gnc", "gnd", "gne", "gng", "gnh", "gni", "gnj", "gnk", "gnl", "gnm", "gnn", "gno", "gnq", "gnr", "gnt", "gnu", "gnw", "gnz", "goa", "gob", "goc", "god", "goe", "gof", "gog", "goh", "goi", "goj", "gok", "gol", "gom", "gon", "goo", "gop", "goq", "gor", "gos", "got", "gou", "gow", "gox", "goy", "goz", "gpa", "gpe", "gpn", "gqa", "gqi", "gqn", "gqr", "gqu", "gra", "grb", "grc", "grd", "grg", "grh", "gri", "grj", "grk", "grm", "gro", "grq", "grr", "grs", "grt", "gru", "grv", "grw", "grx", "gry", "grz", "gse", "gsg", "gsl", "gsm", "gsn", "gso", "gsp", "gss", "gsw", "gta", "gti", "gtu", "gu", "gua", "gub", "guc", "gud", "gue", "guf", "gug", "guh", "gui", "guk", "gul", "gum", "gun", "guo", "gup", "guq", "gur", "gus", "gut", "guu", "guv", "guw", "gux", "guz", "gv", "gva", "gvc", "gve", "gvf", "gvj", "gvl", "gvm", "gvn", "gvo", "gvp", "gvr", "gvs", "gvy", "gwa", "gwb", "gwc", "gwd", "gwe", "gwf", "gwg", "gwi", "gwj", "gwm", "gwn", "gwr", "gwt", "gwu", "gww", "gwx", "gxx", "gya", "gyb", "gyd", "gye", "gyf", "gyg", "gyi", "gyl", "gym", "gyn", "gyo", "gyr", "gyy", "gza", "gzi", "gzn", "ha", "haa", "hab", "hac", "had", "hae", "haf", "hag", "hah", "hai", "haj", "hak", "hal", "ham", "han", "hao", "hap", "haq", "har", "has", "hav", "haw", "hax", "hay", "haz", "hba", "hbb", "hbn", "hbo", "hbu", "hca", "hch", "hdn", "hds", "hdy", "he", "hea", "hed", "heg", "heh", "hei", "hem", "hgm", "hgw", "hhi", "hhr", "hhy", "hi", "hia", "hib", "hid", "hif", "hig", "hih", "hii", "hij", "hik", "hil", "him", "hio", "hir", "hit", "hiw", "hix", "hji", "hka", "hke", "hkk", "hkn", "hks", "hla", "hlb", "hld", "hle", "hlt", "hlu", "hma", "hmb", "hmc", "hmd", "hme", "hmf", "hmg", "hmh", "hmi", "hmj", "hmk", "hml", "hmm", "hmn", "hmp", "hmq", "hmr", "hms", "hmt", "hmu", "hmv", "hmw", "hmx", "hmy", "hmz", "hna", "hnd", "hne", "hnh", "hni", "hnj", "hnn", "hno", "hns", "hnu", "ho", "hoa", "hob", "hoc", "hod", "hoe", "hoh", "hoi", "hoj", "hok", "hol", "hom", "hoo", "hop", "hor", "hos", "hot", "hov", "how", "hoy", "hoz", "hpo", "hps", "hr", "hra", "hrc", "hre", "hrk", "hrm", "hro", "hrp", "hrr", "hrt", "hru", "hrw", "hrx", "hrz", "hsb", "hsh", "hsl", "hsn", "hss", "ht", "hti", "hto", "hts", "htu", "htx", "hu", "hub", "huc", "hud", "hue", "huf", "hug", "huh", "hui", "huj", "huk", "hul", "hum", "huo", "hup", "huq", "hur", "hus", "hut", "huu", "huv", "huw", "hux", "huy", "huz", "hvc", "hve", "hvk", "hvn", "hvv", "hwa", "hwc", "hwo", "hy", "hya", "hyw", "hyx", "hz", "ia", "iai", "ian", "iap", "iar", "iba", "ibb", "ibd", "ibe", "ibg", "ibh", "ibi", "ibl", "ibm", "ibn", "ibr", "ibu", "iby", "ica", "ich", "icl", "icr", "id", "ida", "idb", "idc", "idd", "ide", "idi", "idr", "ids", "idt", "idu", "ie", "ifa", "ifb", "ife", "iff", "ifk", "ifm", "ifu", "ify", "ig", "igb", "ige", "igg", "igl", "igm", "ign", "igo", "igs", "igw", "ihb", "ihi", "ihp", "ihw", "ii", "iin", "iir", "ijc", "ije", "ijj", "ijn", "ijo", "ijs", "ik", "ike", "iki", "ikk", "ikl", "iko", "ikp", "ikr", "iks", "ikt", "ikv", "ikw", "ikx", "ikz", "ila", "ilb", "ilg", "ili", "ilk", "ill", "ilm", "ilo", "ilp", "ils", "ilu", "ilv", "ilw", "ima", "ime", "imi", "iml", "imn", "imo", "imr", "ims", "imy", "in", "inb", "inc", "ine", "ing", "inh", "inj", "inl", "inm", "inn", "ino", "inp", "ins", "int", "inz", "io", "ior", "iou", "iow", "ipi", "ipo", "iqu", "iqw", "ira", "ire", "irh", "iri", "irk", "irn", "iro", "irr", "iru", "irx", "iry", "is", "isa", "isc", "isd", "ise", "isg", "ish", "isi", "isk", "ism", "isn", "iso", "isr", "ist", "isu", "it", "itb", "itc", "itd", "ite", "iti", "itk", "itl", "itm", "ito", "itr", "its", "itt", "itv", "itw", "itx", "ity", "itz", "iu", "ium", "ivb", "ivv", "iw", "iwk", "iwm", "iwo", "iws", "ixc", "ixl", "iya", "iyo", "iyx", "izh", "izi", "izr", "izz", "ja", "jaa", "jab", "jac", "jad", "jae", "jaf", "jah", "jaj", "jak", "jal", "jam", "jan", "jao", "jaq", "jar", "jas", "jat", "jau", "jax", "jay", "jaz", "jbe", "jbi", "jbj", "jbk", "jbn", "jbo", "jbr", "jbt", "jbu", "jbw", "jcs", "jct", "jda", "jdg", "jdt", "jeb", "jee", "jeg", "jeh", "jei", "jek", "jel", "jen", "jer", "jet", "jeu", "jgb", "jge", "jgk", "jgo", "jhi", "jhs", "ji", "jia", "jib", "jic", "jid", "jie", "jig", "jih", "jii", "jil", "jim", "jio", "jiq", "jit", "jiu", "jiv", "jiy", "jje", "jjr", "jka", "jkm", "jko", "jkp", "jkr", "jku", "jle", "jls", "jma", "jmb", "jmc", "jmd", "jmi", "jml", "jmn", "jmr", "jms", "jmw", "jmx", "jna", "jnd", "jng", "jni", "jnj", "jnl", "jns", "job", "jod", "jog", "jor", "jos", "jow", "jpa", "jpr", "jpx", "jqr", "jra", "jrb", "jrr", "jrt", "jru", "jsl", "jua", "jub", "juc", "jud", "juh", "jui", "juk", "jul", "jum", "jun", "juo", "jup", "jur", "jus", "jut", "juu", "juw", "juy", "jv", "jvd", "jvn", "jw", "jwi", "jya", "jye", "jyy", "ka", "kaa", "kab", "kac", "kad", "kae", "kaf", "kag", "kah", "kai", "kaj", "kak", "kam", "kao", "kap", "kaq", "kar", "kav", "kaw", "kax", "kay", "kba", "kbb", "kbc", "kbd", "kbe", "kbf", "kbg", "kbh", "kbi", "kbj", "kbk", "kbl", "kbm", "kbn", "kbo", "kbp", "kbq", "kbr", "kbs", "kbt", "kbu", "kbv", "kbw", "kbx", "kby", "kbz", "kca", "kcb", "kcc", "kcd", "kce", "kcf", "kcg", "kch", "kci", "kcj", "kck", "kcl", "kcm", "kcn", "kco", "kcp", "kcq", "kcr", "kcs", "kct", "kcu", "kcv", "kcw", "kcx", "kcy", "kcz", "kda", "kdc", "kdd", "kde", "kdf", "kdg", "kdh", "kdi", "kdj", "kdk", "kdl", "kdm", "kdn", "kdo", "kdp", "kdq", "kdr", "kdt", "kdu", "kdv", "kdw", "kdx", "kdy", "kdz", "kea", "keb", "kec", "ked", "kee", "kef", "keg", "keh", "kei", "kej", "kek", "kel", "kem", "ken", "keo", "kep", "keq", "ker", "kes", "ket", "keu", "kev", "kew", "kex", "key", "kez", "kfa", "kfb", "kfc", "kfd", "kfe", "kff", "kfg", "kfh", "kfi", "kfj", "kfk", "kfl", "kfm", "kfn", "kfo", "kfp", "kfq", "kfr", "kfs", "kft", "kfu", "kfv", "kfw", "kfx", "kfy", "kfz", "kg", "kga", "kgb", "kgc", "kgd", "kge", "kgf", "kgg", "kgh", "kgi", "kgj", "kgk", "kgl", "kgm", "kgn", "kgo", "kgp", "kgq", "kgr", "kgs", "kgt", "kgu", "kgv", "kgw", "kgx", "kgy", "kha", "khb", "khc", "khd", "khe", "khf", "khg", "khh", "khi", "khj", "khk", "khl", "khn", "kho", "khp", "khq", "khr", "khs", "kht", "khu", "khv", "khw", "khx", "khy", "khz", "ki", "kia", "kib", "kic", "kid", "kie", "kif", "kig", "kih", "kii", "kij", "kil", "kim", "kio", "kip", "kiq", "kis", "kit", "kiu", "kiv", "kiw", "kix", "kiy", "kiz", "kj", "kja", "kjb", "kjc", "kjd", "kje", "kjf", "kjg", "kjh", "kji", "kjj", "kjk", "kjl", "kjm", "kjn", "kjo", "kjp", "kjq", "kjr", "kjs", "kjt", "kju", "kjv", "kjx", "kjy", "kjz", "kk", "kka", "kkb", "kkc", "kkd", "kke", "kkf", "kkg", "kkh", "kki", "kkj", "kkk", "kkl", "kkm", "kkn", "kko", "kkp", "kkq", "kkr", "kks", "kkt", "kku", "kkv", "kkw", "kkx", "kky", "kkz", "kl", "kla", "klb", "klc", "kld", "kle", "klf", "klg", "klh", "kli", "klj", "klk", "kll", "klm", "kln", "klo", "klp", "klq", "klr", "kls", "klt", "klu", "klv", "klw", "klx", "kly", "klz", "km", "kma", "kmb", "kmc", "kmd", "kme", "kmf", "kmg", "kmh", "kmi", "kmj", "kmk", "kml", "kmm", "kmn", "kmo", "kmp", "kmq", "kmr", "kms", "kmt", "kmu", "kmv", "kmw", "kmx", "kmy", "kmz", "kn", "kna", "knb", "knc", "knd", "kne", "knf", "kng", "kni", "knj", "knk", "knl", "knm", "knn", "kno", "knp", "knq", "knr", "kns", "knt", "knu", "knv", "knw", "knx", "kny", "knz", "ko", "koa", "koc", "kod", "koe", "kof", "kog", "koh", "koi", "koj", "kok", "kol", "koo", "kop", "koq", "kos", "kot", "kou", "kov", "kow", "kox", "koy", "koz", "kpa", "kpb", "kpc", "kpd", "kpe", "kpf", "kpg", "kph", "kpi", "kpj", "kpk", "kpl", "kpm", "kpn", "kpo", "kpp", "kpq", "kpr", "kps", "kpt", "kpu", "kpv", "kpw", "kpx", "kpy", "kpz", "kqa", "kqb", "kqc", "kqd", "kqe", "kqf", "kqg", "kqh", "kqi", "kqj", "kqk", "kql", "kqm", "kqn", "kqo", "kqp", "kqq", "kqr", "kqs", "kqt", "kqu", "kqv", "kqw", "kqx", "kqy", "kqz", "kr", "kra", "krb", "krc", "krd", "kre", "krf", "krh", "kri", "krj", "krk", "krl", "krm", "krn", "kro", "krp", "krr", "krs", "krt", "kru", "krv", "krw", "krx", "kry", "krz", "ks", "ksa", "ksb", "ksc", "ksd", "kse", "ksf", "ksg", "ksh", "ksi", "ksj", "ksk", "ksl", "ksm", "ksn", "kso", "ksp", "ksq", "ksr", "kss", "kst", "ksu", "ksv", "ksw", "ksx", "ksy", "ksz", "kta", "ktb", "ktc", "ktd", "kte", "ktf", "ktg", "kth", "kti", "ktj", "ktk", "ktl", "ktm", "ktn", "kto", "ktp", "ktq", "ktr", "kts", "ktt", "ktu", "ktv", "ktw", "ktx", "kty", "ktz", "ku", "kub", "kuc", "kud", "kue", "kuf", "kug", "kuh", "kui", "kuj", "kuk", "kul", "kum", "kun", "kuo", "kup", "kuq", "kus", "kut", "kuu", "kuv", "kuw", "kux", "kuy", "kuz", "kv", "kva", "kvb", "kvc", "kvd", "kve", "kvf", "kvg", "kvh", "kvi", "kvj", "kvk", "kvl", "kvm", "kvn", "kvo", "kvp", "kvq", "kvr", "kvs", "kvt", "kvu", "kvv", "kvw", "kvx", "kvy", "kvz", "kw", "kwa", "kwb", "kwc", "kwd", "kwe", "kwf", "kwg", "kwh", "kwi", "kwj", "kwk", "kwl", "kwm", "kwn", "kwo", "kwp", "kwq", "kwr", "kws", "kwt", "kwu", "kwv", "kww", "kwx", "kwy", "kwz", "kxa", "kxb", "kxc", "kxd", "kxe", "kxf", "kxh", "kxi", "kxj", "kxk", "kxl", "kxm", "kxn", "kxo", "kxp", "kxq", "kxr", "kxs", "kxt", "kxu", "kxv", "kxw", "kxx", "kxy", "kxz", "ky", "kya", "kyb", "kyc", "kyd", "kye", "kyf", "kyg", "kyh", "kyi", "kyj", "kyk", "kyl", "kym", "kyn", "kyo", "kyp", "kyq", "kyr", "kys", "kyt", "kyu", "kyv", "kyw", "kyx", "kyy", "kyz", "kza", "kzb", "kzc", "kzd", "kze", "kzf", "kzg", "kzh", "kzi", "kzj", "kzk", "kzl", "kzm", "kzn", "kzo", "kzp", "kzq", "kzr", "kzs", "kzt", "kzu", "kzv", "kzw", "kzx", "kzy", "kzz", "la", "laa", "lab", "lac", "lad", "lae", "laf", "lag", "lah", "lai", "laj", "lak", "lal", "lam", "lan", "lap", "laq", "lar", "las", "lau", "law", "lax", "lay", "laz", "lb", "lba", "lbb", "lbc", "lbe", "lbf", "lbg", "lbi", "lbj", "lbk", "lbl", "lbm", "lbn", "lbo", "lbq", "lbr", "lbs", "lbt", "lbu", "lbv", "lbw", "lbx", "lby", "lbz", "lcc", "lcd", "lce", "lcf", "lch", "lcl", "lcm", "lcp", "lcq", "lcs", "lda", "ldb", "ldd", "ldg", "ldh", "ldi", "ldj", "ldk", "ldl", "ldm", "ldn", "ldo", "ldp", "ldq", "lea", "leb", "lec", "led", "lee", "lef", "leg", "leh", "lei", "lej", "lek", "lel", "lem", "len", "leo", "lep", "leq", "ler", "les", "let", "leu", "lev", "lew", "lex", "ley", "lez", "lfa", "lfn", "lg", "lga", "lgb", "lgg", "lgh", "lgi", "lgk", "lgl", "lgm", "lgn", "lgq", "lgr", "lgt", "lgu", "lgz", "lha", "lhh", "lhi", "lhl", "lhm", "lhn", "lhp", "lhs", "lht", "lhu", "li", "lia", "lib", "lic", "lid", "lie", "lif", "lig", "lih", "lii", "lij", "lik", "lil", "lio", "lip", "liq", "lir", "lis", "liu", "liv", "liw", "lix", "liy", "liz", "lja", "lje", "lji", "ljl", "ljp", "ljw", "ljx", "lka", "lkb", "lkc", "lkd", "lke", "lkh", "lki", "lkj", "lkl", "lkm", "lkn", "lko", "lkr", "lks", "lkt", "lku", "lky", "lla", "llb", "llc", "lld", "lle", "llf", "llg", "llh", "lli", "llj", "llk", "lll", "llm", "lln", "llo", "llp", "llq", "lls", "llu", "llx", "lma", "lmb", "lmc", "lmd", "lme", "lmf", "lmg", "lmh", "lmi", "lmj", "lmk", "lml", "lmm", "lmn", "lmo", "lmp", "lmq", "lmr", "lmu", "lmv", "lmw", "lmx", "lmy", "lmz", "ln", "lna", "lnb", "lnd", "lng", "lnh", "lni", "lnj", "lnl", "lnm", "lnn", "lno", "lns", "lnu", "lnw", "lnz", "lo", "loa", "lob", "loc", "loe", "lof", "log", "loh", "loi", "loj", "lok", "lol", "lom", "lon", "loo", "lop", "loq", "lor", "los", "lot", "lou", "lov", "low", "lox", "loy", "loz", "lpa", "lpe", "lpn", "lpo", "lpx", "lra", "lrc", "lre", "lrg", "lri", "lrk", "lrl", "lrm", "lrn", "lro", "lrr", "lrt", "lrv", "lrz", "lsa", "lsd", "lse", "lsg", "lsh", "lsi", "lsl", "lsm", "lsn", "lso", "lsp", "lsr", "lss", "lst", "lsv", "lsy", "lt", "ltc", "ltg", "lth", "lti", "ltn", "lto", "lts", "ltu", "lu", "lua", "luc", "lud", "lue", "luf", "lui", "luj", "luk", "lul", "lum", "lun", "luo", "lup", "luq", "lur", "lus", "lut", "luu", "luv", "luw", "luy", "luz", "lv", "lva", "lvi", "lvk", "lvs", "lvu", "lwa", "lwe", "lwg", "lwh", "lwl", "lwm", "lwo", "lws", "lwt", "lwu", "lww", "lya", "lyg", "lyn", "lzh", "lzl", "lzn", "lzz", "maa", "mab", "mad", "mae", "maf", "mag", "mai", "maj", "mak", "mam", "man", "map", "maq", "mas", "mat", "mau", "mav", "maw", "max", "maz", "mba", "mbb", "mbc", "mbd", "mbe", "mbf", "mbh", "mbi", "mbj", "mbk", "mbl", "mbm", "mbn", "mbo", "mbp", "mbq", "mbr", "mbs", "mbt", "mbu", "mbv", "mbw", "mbx", "mby", "mbz", "mca", "mcb", "mcc", "mcd", "mce", "mcf", "mcg", "mch", "mci", "mcj", "mck", "mcl", "mcm", "mcn", "mco", "mcp", "mcq", "mcr", "mcs", "mct", "mcu", "mcv", "mcw", "mcx", "mcy", "mcz", "mda", "mdb", "mdc", "mdd", "mde", "mdf", "mdg", "mdh", "mdi", "mdj", "mdk", "mdl", "mdm", "mdn", "mdp", "mdq", "mdr", "mds", "mdt", "mdu", "mdv", "mdw", "mdx", "mdy", "mdz", "mea", "meb", "mec", "med", "mee", "mef", "meg", "meh", "mei", "mej", "mek", "mel", "mem", "men", "meo", "mep", "meq", "mer", "mes", "met", "meu", "mev", "mew", "mey", "mez", "mfa", "mfb", "mfc", "mfd", "mfe", "mff", "mfg", "mfh", "mfi", "mfj", "mfk", "mfl", "mfm", "mfn", "mfo", "mfp", "mfq", "mfr", "mfs", "mft", "mfu", "mfv", "mfw", "mfx", "mfy", "mfz", "mg", "mga", "mgb", "mgc", "mgd", "mge", "mgf", "mgg", "mgh", "mgi", "mgj", "mgk", "mgl", "mgm", "mgn", "mgo", "mgp", "mgq", "mgr", "mgs", "mgt", "mgu", "mgv", "mgw", "mgx", "mgy", "mgz", "mh", "mha", "mhb", "mhc", "mhd", "mhe", "mhf", "mhg", "mhh", "mhi", "mhj", "mhk", "mhl", "mhm", "mhn", "mho", "mhp", "mhq", "mhr", "mhs", "mht", "mhu", "mhw", "mhx", "mhy", "mhz", "mi", "mia", "mib", "mic", "mid", "mie", "mif", "mig", "mih", "mii", "mij", "mik", "mil", "mim", "min", "mio", "mip", "miq", "mir", "mis", "mit", "miu", "miw", "mix", "miy", "miz", "mja", "mjb", "mjc", "mjd", "mje", "mjg", "mjh", "mji", "mjj", "mjk", "mjl", "mjm", "mjn", "mjo", "mjp", "mjq", "mjr", "mjs", "mjt", "mju", "mjv", "mjw", "mjx", "mjy", "mjz", "mk", "mka", "mkb", "mkc", "mke", "mkf", "mkg", "mkh", "mki", "mkj", "mkk", "mkl", "mkm", "mkn", "mko", "mkp", "mkq", "mkr", "mks", "mkt", "mku", "mkv", "mkw", "mkx", "mky", "mkz", "ml", "mla", "mlb", "mlc", "mld", "mle", "mlf", "mlh", "mli", "mlj", "mlk", "mll", "mlm", "mln", "mlo", "mlp", "mlq", "mlr", "mls", "mlu", "mlv", "mlw", "mlx", "mlz", "mma", "mmb", "mmc", "mmd", "mme", "mmf", "mmg", "mmh", "mmi", "mmj", "mmk", "mml", "mmm", "mmn", "mmo", "mmp", "mmq", "mmr", "mmt", "mmu", "mmv", "mmw", "mmx", "mmy", "mmz", "mn", "mna", "mnb", "mnc", "mnd", "mne", "mnf", "mng", "mnh", "mni", "mnj", "mnk", "mnl", "mnm", "mnn", "mno", "mnp", "mnq", "mnr", "mns", "mnt", "mnu", "mnv", "mnw", "mnx", "mny", "mnz", "mo", "moa", "moc", "mod", "moe", "mof", "mog", "moh", "moi", "moj", "mok", "mom", "moo", "mop", "moq", "mor", "mos", "mot", "mou", "mov", "mow", "mox", "moy", "moz", "mpa", "mpb", "mpc", "mpd", "mpe", "mpg", "mph", "mpi", "mpj", "mpk", "mpl", "mpm", "mpn", "mpo", "mpp", "mpq", "mpr", "mps", "mpt", "mpu", "mpv", "mpw", "mpx", "mpy", "mpz", "mqa", "mqb", "mqc", "mqe", "mqf", "mqg", "mqh", "mqi", "mqj", "mqk", "mql", "mqm", "mqn", "mqo", "mqp", "mqq", "mqr", "mqs", "mqt", "mqu", "mqv", "mqw", "mqx", "mqy", "mqz", "mr", "mra", "mrb", "mrc", "mrd", "mre", "mrf", "mrg", "mrh", "mrj", "mrk", "mrl", "mrm", "mrn", "mro", "mrp", "mrq", "mrr", "mrs", "mrt", "mru", "mrv", "mrw", "mrx", "mry", "mrz", "ms", "msb", "msc", "msd", "mse", "msf", "msg", "msh", "msi", "msj", "msk", "msl", "msm", "msn", "mso", "msp", "msq", "msr", "mss", "mst", "msu", "msv", "msw", "msx", "msy", "msz", "mt", "mta", "mtb", "mtc", "mtd", "mte", "mtf", "mtg", "mth", "mti", "mtj", "mtk", "mtl", "mtm", "mtn", "mto", "mtp", "mtq", "mtr", "mts", "mtt", "mtu", "mtv", "mtw", "mtx", "mty", "mua", "mub", "muc", "mud", "mue", "mug", "muh", "mui", "muj", "muk", "mul", "mum", "mun", "muo", "mup", "muq", "mur", "mus", "mut", "muu", "muv", "mux", "muy", "muz", "mva", "mvb", "mvd", "mve", "mvf", "mvg", "mvh", "mvi", "mvk", "mvl", "mvm", "mvn", "mvo", "mvp", "mvq", "mvr", "mvs", "mvt", "mvu", "mvv", "mvw", "mvx", "mvy", "mvz", "mwa", "mwb", "mwc", "mwd", "mwe", "mwf", "mwg", "mwh", "mwi", "mwj", "mwk", "mwl", "mwm", "mwn", "mwo", "mwp", "mwq", "mwr", "mws", "mwt", "mwu", "mwv", "mww", "mwx", "mwy", "mwz", "mxa", "mxb", "mxc", "mxd", "mxe", "mxf", "mxg", "mxh", "mxi", "mxj", "mxk", "mxl", "mxm", "mxn", "mxo", "mxp", "mxq", "mxr", "mxs", "mxt", "mxu", "mxv", "mxw", "mxx", "mxy", "mxz", "my", "myb", "myc", "myd", "mye", "myf", "myg", "myh", "myi", "myj", "myk", "myl", "mym", "myn", "myo", "myp", "myq", "myr", "mys", "myt", "myu", "myv", "myw", "myx", "myy", "myz", "mza", "mzb", "mzc", "mzd", "mze", "mzg", "mzh", "mzi", "mzj", "mzk", "mzl", "mzm", "mzn", "mzo", "mzp", "mzq", "mzr", "mzs", "mzt", "mzu", "mzv", "mzw", "mzx", "mzy", "mzz", "na", "naa", "nab", "nac", "nad", "nae", "naf", "nag", "nah", "nai", "naj", "nak", "nal", "nam", "nan", "nao", "nap", "naq", "nar", "nas", "nat", "naw", "nax", "nay", "naz", "nb", "nba", "nbb", "nbc", "nbd", "nbe", "nbf", "nbg", "nbh", "nbi", "nbj", "nbk", "nbm", "nbn", "nbo", "nbp", "nbq", "nbr", "nbs", "nbt", "nbu", "nbv", "nbw", "nbx", "nby", "nca", "ncb", "ncc", "ncd", "nce", "ncf", "ncg", "nch", "nci", "ncj", "nck", "ncl", "ncm", "ncn", "nco", "ncp", "ncq", "ncr", "ncs", "nct", "ncu", "ncx", "ncz", "nd", "nda", "ndb", "ndc", "ndd", "ndf", "ndg", "ndh", "ndi", "ndj", "ndk", "ndl", "ndm", "ndn", "ndp", "ndq", "ndr", "nds", "ndt", "ndu", "ndv", "ndw", "ndx", "ndy", "ndz", "ne", "nea", "neb", "nec", "ned", "nee", "nef", "neg", "neh", "nei", "nej", "nek", "nem", "nen", "neo", "neq", "ner", "nes", "net", "neu", "nev", "new", "nex", "ney", "nez", "nfa", "nfd", "nfl", "nfr", "nfu", "ng", "nga", "ngb", "ngc", "ngd", "nge", "ngf", "ngg", "ngh", "ngi", "ngj", "ngk", "ngl", "ngm", "ngn", "ngo", "ngp", "ngq", "ngr", "ngs", "ngt", "ngu", "ngv", "ngw", "ngx", "ngy", "ngz", "nha", "nhb", "nhc", "nhd", "nhe", "nhf", "nhg", "nhh", "nhi", "nhk", "nhm", "nhn", "nho", "nhp", "nhq", "nhr", "nht", "nhu", "nhv", "nhw", "nhx", "nhy", "nhz", "nia", "nib", "nic", "nid", "nie", "nif", "nig", "nih", "nii", "nij", "nik", "nil", "nim", "nin", "nio", "niq", "nir", "nis", "nit", "niu", "niv", "niw", "nix", "niy", "niz", "nja", "njb", "njd", "njh", "nji", "njj", "njl", "njm", "njn", "njo", "njr", "njs", "njt", "nju", "njx", "njy", "njz", "nka", "nkb", "nkc", "nkd", "nke", "nkf", "nkg", "nkh", "nki", "nkj", "nkk", "nkm", "nkn", "nko", "nkp", "nkq", "nkr", "nks", "nkt", "nku", "nkv", "nkw", "nkx", "nkz", "nl", "nla", "nlc", "nle", "nlg", "nli", "nlj", "nlk", "nll", "nlm", "nln", "nlo", "nlq", "nlr", "nlu", "nlv", "nlw", "nlx", "nly", "nlz", "nma", "nmb", "nmc", "nmd", "nme", "nmf", "nmg", "nmh", "nmi", "nmj", "nmk", "nml", "nmm", "nmn", "nmo", "nmp", "nmq", "nmr", "nms", "nmt", "nmu", "nmv", "nmw", "nmx", "nmy", "nmz", "nn", "nna", "nnb", "nnc", "nnd", "nne", "nnf", "nng", "nnh", "nni", "nnj", "nnk", "nnl", "nnm", "nnn", "nnp", "nnq", "nnr", "nns", "nnt", "nnu", "nnv", "nnw", "nnx", "nny", "nnz", "no", "noa", "noc", "nod", "noe", "nof", "nog", "noh", "noi", "noj", "nok", "nol", "nom", "non", "noo", "nop", "noq", "nos", "not", "nou", "nov", "now", "noy", "noz", "npa", "npb", "npg", "nph", "npi", "npl", "npn", "npo", "nps", "npu", "npx", "npy", "nqg", "nqk", "nql", "nqm", "nqn", "nqo", "nqq", "nqy", "nr", "nra", "nrb", "nrc", "nre", "nrf", "nrg", "nri", "nrk", "nrl", "nrm", "nrn", "nrp", "nrr", "nrt", "nru", "nrx", "nrz", "nsa", "nsc", "nsd", "nse", "nsf", "nsg", "nsh", "nsi", "nsk", "nsl", "nsm", "nsn", "nso", "nsp", "nsq", "nsr", "nss", "nst", "nsu", "nsv", "nsw", "nsx", "nsy", "nsz", "ntd", "nte", "ntg", "nti", "ntj", "ntk", "ntm", "nto", "ntp", "ntr", "nts", "ntu", "ntw", "ntx", "nty", "ntz", "nua", "nub", "nuc", "nud", "nue", "nuf", "nug", "nuh", "nui", "nuj", "nuk", "nul", "num", "nun", "nuo", "nup", "nuq", "nur", "nus", "nut", "nuu", "nuv", "nuw", "nux", "nuy", "nuz", "nv", "nvh", "nvm", "nvo", "nwa", "nwb", "nwc", "nwe", "nwg", "nwi", "nwm", "nwo", "nwr", "nwx", "nwy", "nxa", "nxd", "nxe", "nxg", "nxi", "nxk", "nxl", "nxm", "nxn", "nxo", "nxq", "nxr", "nxu", "nxx", "ny", "nyb", "nyc", "nyd", "nye", "nyf", "nyg", "nyh", "nyi", "nyj", "nyk", "nyl", "nym", "nyn", "nyo", "nyp", "nyq", "nyr", "nys", "nyt", "nyu", "nyv", "nyw", "nyx", "nyy", "nza", "nzb", "nzd", "nzi", "nzk", "nzm", "nzs", "nzu", "nzy", "nzz", "oaa", "oac", "oar", "oav", "obi", "obk", "obl", "obm", "obo", "obr", "obt", "obu", "oc", "oca", "och", "oco", "ocu", "oda", "odk", "odt", "odu", "ofo", "ofs", "ofu", "ogb", "ogc", "oge", "ogg", "ogo", "ogu", "oht", "ohu", "oia", "oin", "oj", "ojb", "ojc", "ojg", "ojp", "ojs", "ojv", "ojw", "oka", "okb", "okd", "oke", "okg", "okh", "oki", "okj", "okk", "okl", "okm", "okn", "oko", "okr", "oks", "oku", "okv", "okx", "ola", "old", "ole", "olk", "olm", "olo", "olr", "olt", "olu", "om", "oma", "omb", "omc", "ome", "omg", "omi", "omk", "oml", "omn", "omo", "omp", "omq", "omr", "omt", "omu", "omv", "omw", "omx", "ona", "onb", "one", "ong", "oni", "onj", "onk", "onn", "ono", "onp", "onr", "ons", "ont", "onu", "onw", "onx", "ood", "oog", "oon", "oor", "oos", "opa", "opk", "opm", "opo", "opt", "opy", "or", "ora", "orc", "ore", "org", "orh", "orn", "oro", "orr", "ors", "ort", "oru", "orv", "orw", "orx", "ory", "orz", "os", "osa", "osc", "osi", "oso", "osp", "ost", "osu", "osx", "ota", "otb", "otd", "ote", "oti", "otk", "otl", "otm", "otn", "oto", "otq", "otr", "ots", "ott", "otu", "otw", "otx", "oty", "otz", "oua", "oub", "oue", "oui", "oum", "oun", "ovd", "owi", "owl", "oyb", "oyd", "oym", "oyy", "ozm", "pa", "paa", "pab", "pac", "pad", "pae", "paf", "pag", "pah", "pai", "pak", "pal", "pam", "pao", "pap", "paq", "par", "pas", "pat", "pau", "pav", "paw", "pax", "pay", "paz", "pbb", "pbc", "pbe", "pbf", "pbg", "pbh", "pbi", "pbl", "pbm", "pbn", "pbo", "pbp", "pbr", "pbs", "pbt", "pbu", "pbv", "pby", "pbz", "pca", "pcb", "pcc", "pcd", "pce", "pcf", "pcg", "pch", "pci", "pcj", "pck", "pcl", "pcm", "pcn", "pcp", "pcr", "pcw", "pda", "pdc", "pdi", "pdn", "pdo", "pdt", "pdu", "pea", "peb", "ped", "pee", "pef", "peg", "peh", "pei", "pej", "pek", "pel", "pem", "peo", "pep", "peq", "pes", "pev", "pex", "pey", "pez", "pfa", "pfe", "pfl", "pga", "pgd", "pgg", "pgi", "pgk", "pgl", "pgn", "pgs", "pgu", "pgy", "pgz", "pha", "phd", "phg", "phh", "phi", "phk", "phl", "phm", "phn", "pho", "phq", "phr", "pht", "phu", "phv", "phw", "pi", "pia", "pib", "pic", "pid", "pie", "pif", "pig", "pih", "pii", "pij", "pil", "pim", "pin", "pio", "pip", "pir", "pis", "pit", "piu", "piv", "piw", "pix", "piy", "piz", "pjt", "pka", "pkb", "pkc", "pkg", "pkh", "pkn", "pko", "pkp", "pkr", "pks", "pkt", "pku", "pl", "pla", "plb", "plc", "pld", "ple", "plf", "plg", "plh", "plj", "plk", "pll", "pln", "plo", "plp", "plq", "plr", "pls", "plt", "plu", "plv", "plw", "ply", "plz", "pma", "pmb", "pmc", "pmd", "pme", "pmf", "pmh", "pmi", "pmj", "pmk", "pml", "pmm", "pmn", "pmo", "pmq", "pmr", "pms", "pmt", "pmu", "pmw", "pmx", "pmy", "pmz", "pna", "pnb", "pnc", "pnd", "pne", "png", "pnh", "pni", "pnj", "pnk", "pnl", "pnm", "pnn", "pno", "pnp", "pnq", "pnr", "pns", "pnt", "pnu", "pnv", "pnw", "pnx", "pny", "pnz", "poc", "pod", "poe", "pof", "pog", "poh", "poi", "pok", "pom", "pon", "poo", "pop", "poq", "pos", "pot", "pov", "pow", "pox", "poy", "poz", "ppa", "ppe", "ppi", "ppk", "ppl", "ppm", "ppn", "ppo", "ppp", "ppq", "ppr", "pps", "ppt", "ppu", "pqa", "pqe", "pqm", "pqw", "pra", "prb", "prc", "prd", "pre", "prf", "prg", "prh", "pri", "prk", "prl", "prm", "prn", "pro", "prp", "prq", "prr", "prs", "prt", "pru", "prw", "prx", "pry", "prz", "ps", "psa", "psc", "psd", "pse", "psg", "psh", "psi", "psl", "psm", "psn", "pso", "psp", "psq", "psr", "pss", "pst", "psu", "psw", "psy", "pt", "pta", "pth", "pti", "ptn", "pto", "ptp", "ptq", "ptr", "ptt", "ptu", "ptv", "ptw", "pty", "pua", "pub", "puc", "pud", "pue", "puf", "pug", "pui", "puj", "puk", "pum", "puo", "pup", "puq", "pur", "put", "puu", "puw", "pux", "puy", "puz", "pwa", "pwb", "pwg", "pwi", "pwm", "pwn", "pwo", "pwr", "pww", "pxm", "pye", "pym", "pyn", "pys", "pyu", "pyx", "pyy", "pzn", "qu", "qua", "qub", "quc", "qud", "quf", "qug", "quh", "qui", "quk", "qul", "qum", "qun", "qup", "quq", "qur", "qus", "quv", "quw", "qux", "quy", "quz", "qva", "qvc", "qve", "qvh", "qvi", "qvj", "qvl", "qvm", "qvn", "qvo", "qvp", "qvs", "qvw", "qvy", "qvz", "qwa", "qwc", "qwe", "qwh", "qwm", "qws", "qwt", "qxa", "qxc", "qxh", "qxl", "qxn", "qxo", "qxp", "qxq", "qxr", "qxs", "qxt", "qxu", "qxw", "qya", "qyp", "raa", "rab", "rac", "rad", "raf", "rag", "rah", "rai", "raj", "rak", "ral", "ram", "ran", "rao", "rap", "raq", "rar", "ras", "rat", "rau", "rav", "raw", "rax", "ray", "raz", "rbb", "rbk", "rbl", "rbp", "rcf", "rdb", "rea", "reb", "ree", "reg", "rei", "rej", "rel", "rem", "ren", "rer", "res", "ret", "rey", "rga", "rge", "rgk", "rgn", "rgr", "rgs", "rgu", "rhg", "rhp", "ria", "rie", "rif", "ril", "rim", "rin", "rir", "rit", "riu", "rjg", "rji", "rjs", "rka", "rkb", "rkh", "rki", "rkm", "rkt", "rkw", "rm", "rma", "rmb", "rmc", "rmd", "rme", "rmf", "rmg", "rmh", "rmi", "rmk", "rml", "rmm", "rmn", "rmo", "rmp", "rmq", "rmr", "rms", "rmt", "rmu", "rmv", "rmw", "rmx", "rmy", "rmz", "rn", "rna", "rnd", "rng", "rnl", "rnn", "rnp", "rnr", "rnw", "ro", "roa", "rob", "roc", "rod", "roe", "rof", "rog", "rol", "rom", "roo", "rop", "ror", "rou", "row", "rpn", "rpt", "rri", "rro", "rrt", "rsb", "rsi", "rsl", "rsm", "rtc", "rth", "rtm", "rts", "rtw", "ru", "rub", "ruc", "rue", "ruf", "rug", "ruh", "rui", "ruk", "ruo", "rup", "ruq", "rut", "ruu", "ruy", "ruz", "rw", "rwa", "rwk", "rwm", "rwo", "rwr", "rxd", "rxw", "ryn", "rys", "ryu", "rzh", "sa", "saa", "sab", "sac", "sad", "sae", "saf", "sah", "sai", "saj", "sak", "sal", "sam", "sao", "sap", "saq", "sar", "sas", "sat", "sau", "sav", "saw", "sax", "say", "saz", "sba", "sbb", "sbc", "sbd", "sbe", "sbf", "sbg", "sbh", "sbi", "sbj", "sbk", "sbl", "sbm", "sbn", "sbo", "sbp", "sbq", "sbr", "sbs", "sbt", "sbu", "sbv", "sbw", "sbx", "sby", "sbz", "sc", "sca", "scb", "sce", "scf", "scg", "sch", "sci", "sck", "scl", "scn", "sco", "scp", "scq", "scs", "sct", "scu", "scv", "scw", "scx", "sd", "sda", "sdb", "sdc", "sde", "sdf", "sdg", "sdh", "sdj", "sdk", "sdl", "sdm", "sdn", "sdo", "sdp", "sdr", "sds", "sdt", "sdu", "sdv", "sdx", "sdz", "se", "sea", "seb", "sec", "sed", "see", "sef", "seg", "seh", "sei", "sej", "sek", "sel", "sem", "sen", "seo", "sep", "seq", "ser", "ses", "set", "seu", "sev", "sew", "sey", "sez", "sfb", "sfe", "sfm", "sfs", "sfw", "sg", "sga", "sgb", "sgc", "sgd", "sge", "sgg", "sgh", "sgi", "sgj", "sgk", "sgl", "sgm", "sgn", "sgo", "sgp", "sgr", "sgs", "sgt", "sgu", "sgw", "sgx", "sgy", "sgz", "sh", "sha", "shb", "shc", "shd", "she", "shg", "shh", "shi", "shj", "shk", "shl", "shm", "shn", "sho", "shp", "shq", "shr", "shs", "sht", "shu", "shv", "shw", "shx", "shy", "shz", "si", "sia", "sib", "sid", "sie", "sif", "sig", "sih", "sii", "sij", "sik", "sil", "sim", "sio", "sip", "siq", "sir", "sis", "sit", "siu", "siv", "siw", "six", "siy", "siz", "sja", "sjb", "sjd", "sje", "sjg", "sjk", "sjl", "sjm", "sjn", "sjo", "sjp", "sjr", "sjs", "sjt", "sju", "sjw", "sk", "ska", "skb", "skc", "skd", "ske", "skf", "skg", "skh", "ski", "skj", "skk", "skm", "skn", "sko", "skp", "skq", "skr", "sks", "skt", "sku", "skv", "skw", "skx", "sky", "skz", "sl", "sla", "slc", "sld", "sle", "slf", "slg", "slh", "sli", "slj", "sll", "slm", "sln", "slp", "slq", "slr", "sls", "slt", "slu", "slw", "slx", "sly", "slz", "sm", "sma", "smb", "smc", "smd", "smf", "smg", "smh", "smi", "smj", "smk", "sml", "smm", "smn", "smp", "smq", "smr", "sms", "smt", "smu", "smv", "smw", "smx", "smy", "smz", "sn", "snb", "snc", "sne", "snf", "sng", "snh", "sni", "snj", "snk", "snl", "snm", "snn", "sno", "snp", "snq", "snr", "sns", "snu", "snv", "snw", "snx", "sny", "snz", "so", "soa", "sob", "soc", "sod", "soe", "sog", "soh", "soi", "soj", "sok", "sol", "son", "soo", "sop", "soq", "sor", "sos", "sou", "sov", "sow", "sox", "soy", "soz", "spb", "spc", "spd", "spe", "spg", "spi", "spk", "spl", "spm", "spn", "spo", "spp", "spq", "spr", "sps", "spt", "spu", "spv", "spx", "spy", "sq", "sqa", "sqh", "sqj", "sqk", "sqm", "sqn", "sqo", "sqq", "sqr", "sqs", "sqt", "squ", "sr", "sra", "srb", "src", "sre", "srf", "srg", "srh", "sri", "srk", "srl", "srm", "srn", "sro", "srq", "srr", "srs", "srt", "sru", "srv", "srw", "srx", "sry", "srz", "ss", "ssa", "ssb", "ssc", "ssd", "sse", "ssf", "ssg", "ssh", "ssi", "ssj", "ssk", "ssl", "ssm", "ssn", "sso", "ssp", "ssq", "ssr", "sss", "sst", "ssu", "ssv", "ssx", "ssy", "ssz", "st", "sta", "stb", "std", "ste", "stf", "stg", "sth", "sti", "stj", "stk", "stl", "stm", "stn", "sto", "stp", "stq", "str", "sts", "stt", "stu", "stv", "stw", "sty", "su", "sua", "sub", "suc", "sue", "sug", "sui", "suj", "suk", "sul", "sum", "suq", "sur", "sus", "sut", "suv", "suw", "sux", "suy", "suz", "sv", "sva", "svb", "svc", "sve", "svk", "svm", "svr", "svs", "svx", "sw", "swb", "swc", "swf", "swg", "swh", "swi", "swj", "swk", "swl", "swm", "swn", "swo", "swp", "swq", "swr", "sws", "swt", "swu", "swv", "sww", "swx", "swy", "sxb", "sxc", "sxe", "sxg", "sxk", "sxl", "sxm", "sxn", "sxo", "sxr", "sxs", "sxu", "sxw", "sya", "syb", "syc", "syd", "syi", "syk", "syl", "sym", "syn", "syo", "syr", "sys", "syw", "syx", "syy", "sza", "szb", "szc", "szd", "sze", "szg", "szl", "szn", "szp", "szs", "szv", "szw", "szy", "ta", "taa", "tab", "tac", "tad", "tae", "taf", "tag", "tai", "taj", "tak", "tal", "tan", "tao", "tap", "taq", "tar", "tas", "tau", "tav", "taw", "tax", "tay", "taz", "tba", "tbb", "tbc", "tbd", "tbe", "tbf", "tbg", "tbh", "tbi", "tbj", "tbk", "tbl", "tbm", "tbn", "tbo", "tbp", "tbq", "tbr", "tbs", "tbt", "tbu", "tbv", "tbw", "tbx", "tby", "tbz", "tca", "tcb", "tcc", "tcd", "tce", "tcf", "tcg", "tch", "tci", "tck", "tcl", "tcm", "tcn", "tco", "tcp", "tcq", "tcs", "tct", "tcu", "tcw", "tcx", "tcy", "tcz", "tda", "tdb", "tdc", "tdd", "tde", "tdf", "tdg", "tdh", "tdi", "tdj", "tdk", "tdl", "tdm", "tdn", "tdo", "tdq", "tdr", "tds", "tdt", "tdu", "tdv", "tdx", "tdy", "te", "tea", "teb", "tec", "ted", "tee", "tef", "teg", "teh", "tei", "tek", "tem", "ten", "teo", "tep", "teq", "ter", "tes", "tet", "teu", "tev", "tew", "tex", "tey", "tez", "tfi", "tfn", "tfo", "tfr", "tft", "tg", "tga", "tgb", "tgc", "tgd", "tge", "tgf", "tgg", "tgh", "tgi", "tgj", "tgn", "tgo", "tgp", "tgq", "tgr", "tgs", "tgt", "tgu", "tgv", "tgw", "tgx", "tgy", "tgz", "th", "thc", "thd", "the", "thf", "thh", "thi", "thk", "thl", "thm", "thn", "thp", "thq", "thr", "ths", "tht", "thu", "thv", "thw", "thx", "thy", "thz", "ti", "tia", "tic", "tid", "tie", "tif", "tig", "tih", "tii", "tij", "tik", "til", "tim", "tin", "tio", "tip", "tiq", "tis", "tit", "tiu", "tiv", "tiw", "tix", "tiy", "tiz", "tja", "tjg", "tji", "tjj", "tjl", "tjm", "tjn", "tjo", "tjp", "tjs", "tju", "tjw", "tk", "tka", "tkb", "tkd", "tke", "tkf", "tkg", "tkk", "tkl", "tkm", "tkn", "tkp", "tkq", "tkr", "tks", "tkt", "tku", "tkv", "tkw", "tkx", "tkz", "tl", "tla", "tlb", "tlc", "tld", "tlf", "tlg", "tlh", "tli", "tlj", "tlk", "tll", "tlm", "tln", "tlo", "tlp", "tlq", "tlr", "tls", "tlt", "tlu", "tlv", "tlw", "tlx", "tly", "tma", "tmb", "tmc", "tmd", "tme", "tmf", "tmg", "tmh", "tmi", "tmj", "tmk", "tml", "tmm", "tmn", "tmo", "tmp", "tmq", "tmr", "tms", "tmt", "tmu", "tmv", "tmw", "tmy", "tmz", "tn", "tna", "tnb", "tnc", "tnd", "tne", "tnf", "tng", "tnh", "tni", "tnk", "tnl", "tnm", "tnn", "tno", "tnp", "tnq", "tnr", "tns", "tnt", "tnu", "tnv", "tnw", "tnx", "tny", "tnz", "to", "tob", "toc", "tod", "toe", "tof", "tog", "toh", "toi", "toj", "tol", "tom", "too", "top", "toq", "tor", "tos", "tou", "tov", "tow", "tox", "toy", "toz", "tpa", "tpc", "tpe", "tpf", "tpg", "tpi", "tpj", "tpk", "tpl", "tpm", "tpn", "tpo", "tpp", "tpq", "tpr", "tpt", "tpu", "tpv", "tpw", "tpx", "tpy", "tpz", "tqb", "tql", "tqm", "tqn", "tqo", "tqp", "tqq", "tqr", "tqt", "tqu", "tqw", "tr", "tra", "trb", "trc", "trd", "tre", "trf", "trg", "trh", "tri", "trj", "trk", "trl", "trm", "trn", "tro", "trp", "trq", "trr", "trs", "trt", "tru", "trv", "trw", "trx", "try", "trz", "ts", "tsa", "tsb", "tsc", "tsd", "tse", "tsf", "tsg", "tsh", "tsi", "tsj", "tsk", "tsl", "tsm", "tsp", "tsq", "tsr", "tss", "tst", "tsu", "tsv", "tsw", "tsx", "tsy", "tsz", "tt", "tta", "ttb", "ttc", "ttd", "tte", "ttf", "ttg", "tth", "tti", "ttj", "ttk", "ttl", "ttm", "ttn", "tto", "ttp", "ttq", "ttr", "tts", "ttt", "ttu", "ttv", "ttw", "tty", "ttz", "tua", "tub", "tuc", "tud", "tue", "tuf", "tug", "tuh", "tui", "tuj", "tul", "tum", "tun", "tuo", "tup", "tuq", "tus", "tut", "tuu", "tuv", "tuw", "tux", "tuy", "tuz", "tva", "tvd", "tve", "tvk", "tvl", "tvm", "tvn", "tvo", "tvs", "tvt", "tvu", "tvw", "tvx", "tvy", "tw", "twa", "twb", "twc", "twd", "twe", "twf", "twg", "twh", "twl", "twm", "twn", "two", "twp", "twq", "twr", "twt", "twu", "tww", "twx", "twy", "txa", "txb", "txc", "txe", "txg", "txh", "txi", "txj", "txm", "txn", "txo", "txq", "txr", "txs", "txt", "txu", "txx", "txy", "ty", "tya", "tye", "tyh", "tyi", "tyj", "tyl", "tyn", "typ", "tyr", "tys", "tyt", "tyu", "tyv", "tyx", "tyz", "tza", "tzh", "tzj", "tzl", "tzm", "tzn", "tzo", "tzx", "uam", "uan", "uar", "uba", "ubi", "ubl", "ubr", "ubu", "uby", "uda", "ude", "udg", "udi", "udj", "udl", "udm", "udu", "ues", "ufi", "ug", "uga", "ugb", "uge", "ugn", "ugo", "ugy", "uha", "uhn", "uis", "uiv", "uji", "uk", "uka", "ukg", "ukh", "ukk", "ukl", "ukp", "ukq", "uks", "uku", "ukw", "uky", "ula", "ulb", "ulc", "ule", "ulf", "uli", "ulk", "ull", "ulm", "uln", "ulu", "ulw", "uma", "umb", "umc", "umd", "umg", "umi", "umm", "umn", "umo", "ump", "umr", "ums", "umu", "una", "und", "une", "ung", "unk", "unm", "unn", "unp", "unr", "unu", "unx", "unz", "uok", "upi", "upv", "ur", "ura", "urb", "urc", "ure", "urf", "urg", "urh", "uri", "urj", "urk", "url", "urm", "urn", "uro", "urp", "urr", "urt", "uru", "urv", "urw", "urx", "ury", "urz", "usa", "ush", "usi", "usk", "usp", "uss", "usu", "uta", "ute", "uth", "utp", "utr", "utu", "uum", "uun", "uur", "uuu", "uve", "uvh", "uvl", "uwa", "uya", "uz", "uzn", "uzs", "vaa", "vae", "vaf", "vag", "vah", "vai", "vaj", "val", "vam", "van", "vao", "vap", "var", "vas", "vau", "vav", "vay", "vbb", "vbk", "ve", "vec", "ved", "vel", "vem", "veo", "vep", "ver", "vgr", "vgt", "vi", "vic", "vid", "vif", "vig", "vil", "vin", "vis", "vit", "viv", "vka", "vki", "vkj", "vkk", "vkl", "vkm", "vko", "vkp", "vkt", "vku", "vlp", "vls", "vma", "vmb", "vmc", "vmd", "vme", "vmf", "vmg", "vmh", "vmi", "vmj", "vmk", "vml", "vmm", "vmp", "vmq", "vmr", "vms", "vmu", "vmv", "vmw", "vmx", "vmy", "vmz", "vnk", "vnm", "vnp", "vo", "vor", "vot", "vra", "vro", "vrs", "vrt", "vsi", "vsl", "vsv", "vto", "vum", "vun", "vut", "vwa", "wa", "waa", "wab", "wac", "wad", "wae", "waf", "wag", "wah", "wai", "waj", "wak", "wal", "wam", "wan", "wao", "wap", "waq", "war", "was", "wat", "wau", "wav", "waw", "wax", "way", "waz", "wba", "wbb", "wbe", "wbf", "wbh", "wbi", "wbj", "wbk", "wbl", "wbm", "wbp", "wbq", "wbr", "wbs", "wbt", "wbv", "wbw", "wca", "wci", "wdd", "wdg", "wdj", "wdk", "wdu", "wdy", "wea", "wec", "wed", "weg", "weh", "wei", "wem", "wen", "weo", "wep", "wer", "wes", "wet", "weu", "wew", "wfg", "wga", "wgb", "wgg", "wgi", "wgo", "wgu", "wgw", "wgy", "wha", "whg", "whk", "whu", "wib", "wic", "wie", "wif", "wig", "wih", "wii", "wij", "wik", "wil", "wim", "win", "wir", "wit", "wiu", "wiv", "wiw", "wiy", "wja", "wji", "wka", "wkb", "wkd", "wkl", "wkr", "wku", "wkw", "wky", "wla", "wlc", "wle", "wlg", "wli", "wlk", "wll", "wlm", "wlo", "wlr", "wls", "wlu", "wlv", "wlw", "wlx", "wly", "wma", "wmb", "wmc", "wmd", "wme", "wmh", "wmi", "wmm", "wmn", "wmo", "wms", "wmt", "wmw", "wmx", "wnb", "wnc", "wnd", "wne", "wng", "wni", "wnk", "wnm", "wnn", "wno", "wnp", "wnu", "wnw", "wny", "wo", "woa", "wob", "woc", "wod", "woe", "wof", "wog", "woi", "wok", "wom", "won", "woo", "wor", "wos", "wow", "woy", "wpc", "wra", "wrb", "wrd", "wrg", "wrh", "wri", "wrk", "wrl", "wrm", "wrn", "wro", "wrp", "wrr", "wrs", "wru", "wrv", "wrw", "wrx", "wry", "wrz", "wsa", "wsg", "wsi", "wsk", "wsr", "wss", "wsu", "wsv", "wtf", "wth", "wti", "wtk", "wtm", "wtw", "wua", "wub", "wud", "wuh", "wul", "wum", "wun", "wur", "wut", "wuu", "wuv", "wux", "wuy", "wwa", "wwb", "wwo", "wwr", "www", "wxa", "wxw", "wya", "wyb", "wyi", "wym", "wyr", "wyy", "xaa", "xab", "xac", "xad", "xae", "xag", "xai", "xaj", "xak", "xal", "xam", "xan", "xao", "xap", "xaq", "xar", "xas", "xat", "xau", "xav", "xaw", "xay", "xba", "xbb", "xbc", "xbd", "xbe", "xbg", "xbi", "xbj", "xbm", "xbn", "xbo", "xbp", "xbr", "xbw", "xbx", "xby", "xcb", "xcc", "xce", "xcg", "xch", "xcl", "xcm", "xcn", "xco", "xcr", "xct", "xcu", "xcv", "xcw", "xcy", "xda", "xdc", "xdk", "xdm", "xdo", "xdy", "xeb", "xed", "xeg", "xel", "xem", "xep", "xer", "xes", "xet", "xeu", "xfa", "xga", "xgb", "xgd", "xgf", "xgg", "xgi", "xgl", "xgm", "xgn", "xgr", "xgu", "xgw", "xh", "xha", "xhc", "xhd", "xhe", "xhr", "xht", "xhu", "xhv", "xia", "xib", "xii", "xil", "xin", "xip", "xir", "xis", "xiv", "xiy", "xjb", "xjt", "xka", "xkb", "xkc", "xkd", "xke", "xkf", "xkg", "xkh", "xki", "xkj", "xkk", "xkl", "xkn", "xko", "xkp", "xkq", "xkr", "xks", "xkt", "xku", "xkv", "xkw", "xkx", "xky", "xkz", "xla", "xlb", "xlc", "xld", "xle", "xlg", "xli", "xln", "xlo", "xlp", "xls", "xlu", "xly", "xma", "xmb", "xmc", "xmd", "xme", "xmf", "xmg", "xmh", "xmj", "xmk", "xml", "xmm", "xmn", "xmo", "xmp", "xmq", "xmr", "xms", "xmt", "xmu", "xmv", "xmw", "xmx", "xmy", "xmz", "xna", "xnb", "xnd", "xng", "xnh", "xni", "xnk", "xnn", "xno", "xnr", "xns", "xnt", "xnu", "xny", "xnz", "xoc", "xod", "xog", "xoi", "xok", "xom", "xon", "xoo", "xop", "xor", "xow", "xpa", "xpc", "xpe", "xpg", "xpi", "xpj", "xpk", "xpm", "xpn", "xpo", "xpp", "xpq", "xpr", "xps", "xpt", "xpu", "xpy", "xqa", "xqt", "xra", "xrb", "xrd", "xre", "xrg", "xri", "xrm", "xrn", "xrq", "xrr", "xrt", "xru", "xrw", "xsa", "xsb", "xsc", "xsd", "xse", "xsh", "xsi", "xsj", "xsl", "xsm", "xsn", "xso", "xsp", "xsq", "xsr", "xss", "xsu", "xsv", "xsy", "xta", "xtb", "xtc", "xtd", "xte", "xtg", "xth", "xti", "xtj", "xtl", "xtm", "xtn", "xto", "xtp", "xtq", "xtr", "xts", "xtt", "xtu", "xtv", "xtw", "xty", "xtz", "xua", "xub", "xud", "xug", "xuj", "xul", "xum", "xun", "xuo", "xup", "xur", "xut", "xuu", "xve", "xvi", "xvn", "xvo", "xvs", "xwa", "xwc", "xwd", "xwe", "xwg", "xwj", "xwk", "xwl", "xwo", "xwr", "xwt", "xww", "xxb", "xxk", "xxm", "xxr", "xxt", "xya", "xyb", "xyj", "xyk", "xyl", "xyt", "xyy", "xzh", "xzm", "xzp", "yaa", "yab", "yac", "yad", "yae", "yaf", "yag", "yah", "yai", "yaj", "yak", "yal", "yam", "yan", "yao", "yap", "yaq", "yar", "yas", "yat", "yau", "yav", "yaw", "yax", "yay", "yaz", "yba", "ybb", "ybd", "ybe", "ybh", "ybi", "ybj", "ybk", "ybl", "ybm", "ybn", "ybo", "ybx", "yby", "ych", "ycl", "ycn", "ycp", "yda", "ydd", "yde", "ydg", "ydk", "yds", "yea", "yec", "yee", "yei", "yej", "yel", "yen", "yer", "yes", "yet", "yeu", "yev", "yey", "yga", "ygi", "ygl", "ygm", "ygp", "ygr", "ygs", "ygu", "ygw", "yha", "yhd", "yhl", "yhs", "yi", "yia", "yif", "yig", "yih", "yii", "yij", "yik", "yil", "yim", "yin", "yip", "yiq", "yir", "yis", "yit", "yiu", "yiv", "yix", "yiy", "yiz", "yka", "ykg", "yki", "ykk", "ykl", "ykm", "ykn", "yko", "ykr", "ykt", "yku", "yky", "yla", "ylb", "yle", "ylg", "yli", "yll", "ylm", "yln", "ylo", "ylr", "ylu", "yly", "yma", "ymb", "ymc", "ymd", "yme", "ymg", "ymh", "ymi", "ymk", "yml", "ymm", "ymn", "ymo", "ymp", "ymq", "ymr", "yms", "ymt", "ymx", "ymz", "yna", "ynd", "yne", "yng", "ynh", "ynk", "ynl", "ynn", "yno", "ynq", "yns", "ynu", "yo", "yob", "yog", "yoi", "yok", "yol", "yom", "yon", "yos", "yot", "yox", "yoy", "ypa", "ypb", "ypg", "yph", "ypk", "ypm", "ypn", "ypo", "ypp", "ypz", "yra", "yrb", "yre", "yri", "yrk", "yrl", "yrm", "yrn", "yro", "yrs", "yrw", "yry", "ysc", "ysd", "ysg", "ysl", "ysn", "yso", "ysp", "ysr", "yss", "ysy", "yta", "ytl", "ytp", "ytw", "yty", "yua", "yub", "yuc", "yud", "yue", "yuf", "yug", "yui", "yuj", "yuk", "yul", "yum", "yun", "yup", "yuq", "yur", "yut", "yuu", "yuw", "yux", "yuy", "yuz", "yva", "yvt", "ywa", "ywg", "ywl", "ywn", "ywq", "ywr", "ywt", "ywu", "yww", "yxa", "yxg", "yxl", "yxm", "yxu", "yxy", "yyr", "yyu", "yyz", "yzg", "yzk", "za", "zaa", "zab", "zac", "zad", "zae", "zaf", "zag", "zah", "zai", "zaj", "zak", "zal", "zam", "zao", "zap", "zaq", "zar", "zas", "zat", "zau", "zav", "zaw", "zax", "zay", "zaz", "zbc", "zbe", "zbl", "zbt", "zbw", "zca", "zch", "zdj", "zea", "zeg", "zeh", "zen", "zga", "zgb", "zgh", "zgm", "zgn", "zgr", "zh", "zhb", "zhd", "zhi", "zhn", "zhw", "zhx", "zia", "zib", "zik", "zil", "zim", "zin", "zir", "ziw", "ziz", "zka", "zkb", "zkd", "zkg", "zkh", "zkk", "zkn", "zko", "zkp", "zkr", "zkt", "zku", "zkv", "zkz", "zle", "zlj", "zlm", "zln", "zlq", "zls", "zlw", "zma", "zmb", "zmc", "zmd", "zme", "zmf", "zmg", "zmh", "zmi", "zmj", "zmk", "zml", "zmm", "zmn", "zmo", "zmp", "zmq", "zmr", "zms", "zmt", "zmu", "zmv", "zmw", "zmx", "zmy", "zmz", "zna", "znd", "zne", "zng", "znk", "zns", "zoc", "zoh", "zom", "zoo", "zoq", "zor", "zos", "zpa", "zpb", "zpc", "zpd", "zpe", "zpf", "zpg", "zph", "zpi", "zpj", "zpk", "zpl", "zpm", "zpn", "zpo", "zpp", "zpq", "zpr", "zps", "zpt", "zpu", "zpv", "zpw", "zpx", "zpy", "zpz", "zqe", "zra", "zrg", "zrn", "zro", "zrp", "zrs", "zsa", "zsk", "zsl", "zsm", "zsr", "zsu", "zte", "ztg", "ztl", "ztm", "ztn", "ztp", "ztq", "zts", "ztt", "ztu", "ztx", "zty", "zu", "zua", "zuh", "zum", "zun", "zuy", "zwa", "zxx", "zyb", "zyg", "zyj", "zyn", "zyp", "zza", "zzj"];

var extlangJson = ["aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "aed", "aen", "afb", "afg", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "ase", "asf", "asp", "asq", "asw", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "bfi", "bfk", "bjn", "bog", "bqn", "bqy", "btj", "bve", "bvl", "bvu", "bzs", "cdo", "cds", "cjy", "cmn", "coa", "cpx", "csc", "csd", "cse", "csf", "csg", "csl", "csn", "csq", "csr", "czh", "czo", "doq", "dse", "dsl", "dup", "ecs", "esl", "esn", "eso", "eth", "fcs", "fse", "fsl", "fss", "gan", "gds", "gom", "gse", "gsg", "gsm", "gss", "gus", "hab", "haf", "hak", "hds", "hji", "hks", "hos", "hps", "hsh", "hsl", "hsn", "icl", "iks", "ils", "inl", "ins", "ise", "isg", "isr", "jak", "jax", "jcs", "jhs", "jls", "jos", "jsl", "jus", "kgi", "knn", "kvb", "kvk", "kvr", "kxd", "lbs", "lce", "lcf", "liw", "lls", "lsg", "lsl", "lsn", "lso", "lsp", "lst", "lsv", "lsy", "ltg", "lvs", "lws", "lzh", "max", "mdl", "meo", "mfa", "mfb", "mfs", "min", "mnp", "mqg", "mre", "msd", "msi", "msr", "mui", "mzc", "mzg", "mzy", "nan", "nbs", "ncs", "nsi", "nsl", "nsp", "nsr", "nzs", "okl", "orn", "ors", "pel", "pga", "pgz", "pks", "prl", "prz", "psc", "psd", "pse", "psg", "psl", "pso", "psp", "psr", "pys", "rms", "rsi", "rsl", "rsm", "sdl", "sfb", "sfs", "sgg", "sgx", "shu", "slf", "sls", "sqk", "sqs", "ssh", "ssp", "ssr", "svk", "swc", "swh", "swl", "syy", "szs", "tmw", "tse", "tsm", "tsq", "tss", "tsy", "tza", "ugn", "ugy", "ukl", "uks", "urk", "uzn", "uzs", "vgt", "vkk", "vkt", "vsi", "vsl", "vsv", "wbs", "wuu", "xki", "xml", "xmm", "xms", "yds", "ygs", "yhs", "ysl", "yue", "zib", "zlm", "zmi", "zsl", "zsm"];

var grandfatheredJson = ["art-lojban", "cel-gaulish", "en-gb-oed", "i-ami", "i-bnn", "i-default", "i-enochian", "i-hak", "i-klingon", "i-lux", "i-mingo", "i-navajo", "i-pwn", "i-tao", "i-tay", "i-tsu", "no-bok", "no-nyn", "sgn-be-fr", "sgn-be-nl", "sgn-ch-de", "zh-guoyu", "zh-hakka", "zh-min", "zh-min-nan", "zh-xiang"];

var regionJson = ["001", "002", "003", "005", "009", "011", "013", "014", "015", "017", "018", "019", "021", "029", "030", "034", "035", "039", "053", "054", "057", "061", "142", "143", "145", "150", "151", "154", "155", "202", "419", "aa", "ac", "ad", "ae", "af", "ag", "ai", "al", "am", "an", "ao", "aq", "ar", "as", "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bl", "bm", "bn", "bo", "bq", "br", "bs", "bt", "bu", "bv", "bw", "by", "bz", "ca", "cc", "cd", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "cp", "cr", "cs", "cu", "cv", "cw", "cx", "cy", "cz", "dd", "de", "dg", "dj", "dk", "dm", "do", "dz", "ea", "ec", "ee", "eg", "eh", "er", "es", "et", "eu", "ez", "fi", "fj", "fk", "fm", "fo", "fr", "fx", "ga", "gb", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gm", "gn", "gp", "gq", "gr", "gs", "gt", "gu", "gw", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "ic", "id", "ie", "il", "im", "in", "io", "iq", "ir", "is", "it", "je", "jm", "jo", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mf", "mg", "mh", "mk", "ml", "mm", "mn", "mo", "mp", "mq", "mr", "ms", "mt", "mu", "mv", "mw", "mx", "my", "mz", "na", "nc", "ne", "nf", "ng", "ni", "nl", "no", "np", "nr", "nt", "nu", "nz", "om", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "pr", "ps", "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn", "so", "sr", "ss", "st", "su", "sv", "sx", "sy", "sz", "ta", "tc", "td", "tf", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tp", "tr", "tt", "tv", "tw", "tz", "ua", "ug", "um", "un", "us", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "yd", "ye", "yt", "yu", "za", "zm", "zr", "zw", "zz"];

var scriptJson = ["adlm", "afak", "aghb", "ahom", "arab", "aran", "armi", "armn", "avst", "bali", "bamu", "bass", "batk", "beng", "bhks", "blis", "bopo", "brah", "brai", "bugi", "buhd", "cakm", "cans", "cari", "cham", "cher", "chrs", "cirt", "copt", "cpmn", "cprt", "cyrl", "cyrs", "deva", "diak", "dogr", "dsrt", "dupl", "egyd", "egyh", "egyp", "elba", "elym", "ethi", "geok", "geor", "glag", "gong", "gonm", "goth", "gran", "grek", "gujr", "guru", "hanb", "hang", "hani", "hano", "hans", "hant", "hatr", "hebr", "hira", "hluw", "hmng", "hmnp", "hrkt", "hung", "inds", "ital", "jamo", "java", "jpan", "jurc", "kali", "kana", "khar", "khmr", "khoj", "kitl", "kits", "knda", "kore", "kpel", "kthi", "lana", "laoo", "latf", "latg", "latn", "leke", "lepc", "limb", "lina", "linb", "lisu", "loma", "lyci", "lydi", "mahj", "maka", "mand", "mani", "marc", "maya", "medf", "mend", "merc", "mero", "mlym", "modi", "mong", "moon", "mroo", "mtei", "mult", "mymr", "nand", "narb", "nbat", "newa", "nkdb", "nkgb", "nkoo", "nshu", "ogam", "olck", "orkh", "orya", "osge", "osma", "palm", "pauc", "perm", "phag", "phli", "phlp", "phlv", "phnx", "piqd", "plrd", "prti", "rjng", "rohg", "roro", "runr", "samr", "sara", "sarb", "saur", "sgnw", "shaw", "shrd", "shui", "sidd", "sind", "sinh", "sogd", "sogo", "sora", "soyo", "sund", "sylo", "syrc", "syre", "syrj", "syrn", "tagb", "takr", "tale", "talu", "taml", "tang", "tavt", "telu", "teng", "tfng", "tglg", "thaa", "thai", "tibt", "tirh", "ugar", "vaii", "visp", "wara", "wcho", "wole", "xpeo", "xsux", "yezi", "yiii", "zanb", "zinh", "zmth", "zsye", "zsym", "zxxx", "zyyy", "zzzz"];

var variantJson = ["1606nict", "1694acad", "1901", "1959acad", "1994", "1996", "abl1943", "akuapem", "alalc97", "aluku", "ao1990", "aranes", "arevela", "arevmda", "asante", "auvern", "baku1926", "balanka", "barla", "basiceng", "bauddha", "biscayan", "biske", "bohoric", "boont", "bornholm", "cisaup", "colb1945", "cornu", "creiss", "dajnko", "ekavsk", "emodeng", "fonipa", "fonkirsh", "fonnapa", "fonupa", "fonxsamp", "gascon", "grclass", "grital", "grmistr", "hepburn", "heploc", "hognorsk", "hsistemo", "ijekavsk", "itihasa", "ivanchov", "jauer", "jyutping", "kkcor", "kociewie", "kscor", "laukika", "lemosin", "lengadoc", "lipaw", "luna1918", "metelko", "monoton", "ndyuka", "nedis", "newfound", "nicard", "njiva", "nulik", "osojs", "oxendict", "pahawh2", "pahawh3", "pahawh4", "pamaka", "petr1708", "pinyin", "polyton", "provenc", "puter", "rigik", "rozaj", "rumgr", "scotland", "scouse", "simple", "solba", "sotav", "spanglis", "surmiran", "sursilv", "sutsilv", "tarask", "uccor", "ucrcor", "ulster", "unifon", "vaidika", "valencia", "vallader", "vivaraup", "wadegile", "xsistemo"];

const version = version$1;

const language = languageJson;
const extlang = extlangJson;
const grandfathered = grandfatheredJson;
const region = regionJson;
const script = scriptJson;
const variant = variantJson;

function isRegExp(something) {
  return something instanceof RegExp;
} // Array.prototype.includes() beefed up to support regexp too


function includes(arr, whatToMatch) {
  if (!Array.isArray(arr) || !arr.length) {
    return false;
  }

  return arr.some(val => isRegExp(val) && whatToMatch.match(val) || typeof val === "string" && whatToMatch === val);
}

function isLangCode(str) {
  if (typeof str !== "string") {
    return {
      res: false,
      message: `Not a string given.`
    };
  }

  if (!str.trim()) {
    return {
      res: false,
      message: `Empty language tag string given.`
    };
  } // https://www.ietf.org/rfc/rfc1766.txt
  // https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
  // ---------------------------------------------------------------------------
  // r1. very rough regex to ensure letters are separated with dashes, in chunks
  // of up to eight characters


  const r1 = /^[a-z0-9]{1,8}(-[a-z0-9]{1,8})*$/gi; // r2. subtags qaa..qtz - "language" subtag

  const r2 = /^q[a-t][a-z]$/gi;
  language.push(r2); // r3. subtags Qaaa..Qabx - "script" subtag

  const r3 = /^qa[a-b][a-x]$/gi;
  script.push(r3); // r4. subtags qm..qz - "region" subtag

  const r4 = /^q[m-z]$/gi;
  region.push(r4); // r5. subtags xa..xz - "region" subtag

  const r5 = /^x[a-z]$/gi;
  region.push(r5); // 6. singleton

  const singletonRegex = /^[0-9a-wy-z]$/gi; // the "x" is reserved for private use, that is, singletons can't be "...-x-..."
  // AA and ZZ
  // ---------------------------------------------------------------------------
  // preliminary validation using R1 - if chunks are not letters/numbers,
  // separated with dashes, its' an instant "false"

  if (!str.match(r1)) {
    return {
      res: false,
      message: `Does not resemble a language tag.`
    };
  } // grandfathered tags are evaluated as whole


  if (includes(grandfathered, str)) {
    return {
      res: true,
      message: null
    };
  } // if by now program is still going, value is process-able:
  // language tags are case-insensitive, "there exist
  // conventions for the capitalization of some of the subtags, but these
  // MUST NOT be taken to carry meaning" (https://tools.ietf.org/html/rfc5646)


  const split = str.toLowerCase().split("-");
  let type; // private|normal - used as a "global" marker among rules, when iterating
  // will help to enforce the sequence:

  let languageMatched;
  let scriptMatched;
  let regionMatched;
  let variantMatched;
  let extlangMatched; // the plan: we split by dash ("-") and get array. We iterate it and each
  // time variable "ok" is set to "true" by some logic rules OR if end of
  // an item is reached, function returns failure result.

  let allOK; // track repeated variant subtags

  const variantGathered = [];
  const singletonGathered = []; // iterate through every chunk:

  for (let i = 0, len = split.length; i < len; i++) {
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //                              TOP CLAUSES
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    // frontal logging // on each iteration, reset allOK

    allOK = false; // if it stays false to the end of all the processing of this
    // iteration, it means this chunk was not validated and whole
    // result will be "false"
    // set type

    if (i === 0) {
      type = split[0] === "x" ? "private" : "normal";
    }

    if (split[i] === "x") {
      if (!split[i + 1]) {
        return {
          res: false,
          message: `Ends with private use subtag, "x".`
        };
      } // TODO - add more logic

      return {
        res: true,
        message: null
      };
    } // catch multiple recognised region tags


    if (regionMatched && region.includes(split[i])) {
      return {
        res: false,
        message: `Two region subtags, "${regionMatched}" and "${split[i]}".`
      };
    } //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //                              MIDDLE CLAUSES
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    // validate the first element


    if (i === 0) {

      if (type === "normal") {
        // validate
        if (includes(language, split[i])) {
          languageMatched = split[i];
          allOK = true;
        }
      }
    } else if (i === 1) { // validate

      if (type === "normal") {
        if (includes(script, split[i])) {
          scriptMatched = split[i];
          allOK = true;
        } else if (includes(extlang, split[i])) {
          extlangMatched = split[i];
          allOK = true;
        } else if (includes(region, split[i])) {
          regionMatched = split[i];
          allOK = true;
        } else if (includes(variant, split[i])) {
          variantMatched = split[i];
          allOK = true;

          if (!variantGathered.includes(split[i])) {
            variantGathered.push(split[i]);
          } else {
            return {
              res: false,
              message: `Repeated variant subtag, "${split[i]}".`
            };
          }
        } else ;
      } //

    } else if (i === 2) {
      if (type === "normal") {
        // at position 3, it's either:
        // * script (language-extlang-script-region)
        // * region (language-script-region)
        // * variant (language-region-variant)
        // * region (language-extlang-region)
        if (languageMatched && extlangMatched) {
          // similar to language-extlang-script-region // match script

          if (includes(script, split[i])) {
            scriptMatched = split[i];
            allOK = true;
          } else if (includes(region, split[i])) {
            // language-extlang-region
            // match region
            regionMatched = split[i];
            allOK = true;
          }
        } else if (languageMatched && scriptMatched) {
          // similar to language-script-region // match region

          if (includes(region, split[i])) {
            regionMatched = split[i];
            allOK = true;
          }
        } else if (languageMatched && regionMatched) {
          // language-region-variant // similar to de-CH-1901 or ca-ES-VALENCIA
          // match variant

          if (includes(variant, split[i])) {
            variantMatched = split[i];
            allOK = true;

            if (!variantGathered.includes(split[i])) {
              variantGathered.push(split[i]);
            } else {
              return {
                res: false,
                message: `Repeated variant subtag, "${split[i]}".`
              };
            }
          }
        }
      }
    } else if (i === 3) {
      if (type === "normal") {
        // at position 4, it's either:
        // * region (language-extlang-script-region)
        // * variant (language-script-region-variant)
        if (languageMatched && extlangMatched && scriptMatched) {
          // match region
          if (includes(region, split[i])) {
            regionMatched = split[i];
            allOK = true;
          }
        } else if (languageMatched && scriptMatched && regionMatched) {
          // match variant
          if (includes(variant, split[i])) {
            variantMatched = split[i];
            allOK = true;
          }
        }
      }
    } //
    //
    //
    //
    //         NON-POSITIONAL CLAUSES
    //
    //
    //
    //
    // catch the singleton-extension

    if (split[i].match(singletonRegex)) {
      if (i === 0) {
        return {
          res: false,
          message: `Starts with singleton, "${split[i]}".`
        };
      } // ELSE - continue the checks

      if (!languageMatched) {
        return {
          res: false,
          message: `Extension must follow at least a primary language subtag.`
        };
      }

      if (!singletonGathered.includes(split[i])) {
        singletonGathered.push(split[i]);
      } else {
        return {
          res: false,
          message: `Two extensions with same single-letter prefix "${split[i]}".`
        };
      }

      if (split[i + 1]) {

        if (!split[i + 1].match(singletonRegex)) {
          allOK = true;
          extlangMatched = split[i];
          i += 1;
          continue;
        } else {
          return {
            res: false,
            message: `Multiple singleton sequence "${split[i]}", "${split[i + 1]}".`
          };
        }
      } else {
        return {
          res: false,
          message: `Ends with singleton, "${split[i]}".`
        };
      }
    } // catch the sequence of variant chunks


    if (!allOK && variantMatched && includes(variant, split[i])) {

      if (i && includes(variant, split[i - 1])) {

        if (!variantGathered.includes(split[i])) {
          variantGathered.push(split[i]);
        } else {
          return {
            res: false,
            message: `Repeated variant subtag, "${split[i]}".`
          };
        }

        allOK = true;
      } else {
        variantGathered.push(split[i]);
        return {
          res: false,
          message: `Variant subtags ${variantGathered.map(val => `"${val}"`).join(", ")}  not in a sequence.`
        };
      }
    } // catch repeated subtags


    if (!allOK && languageMatched && extlangMatched) {
      if (split[i].length > 1) {
        allOK = true;
      }
    } //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //                            BOTTOM CLAUSES
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    if (!allOK) {
      return {
        res: false,
        message: `Unrecognised language subtag, "${split[i]}".`
      };
    } // logging
  } // ---------------------------------------------------------------------------
  // default answer is true, but we'll make
  // hell of a check obstacles to reach this point
  return {
    res: true,
    message: null
  };
}

export { isLangCode, version };
