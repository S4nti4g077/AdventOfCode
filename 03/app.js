// arraythis.com
const data = [
  "DMwrszrfMzSSCpLpfCCn",
  "RMvhZhQqlvhMvRtbvbcPclPlncddppLTdppd",
  "tVMQhFtjjWmsFJsmsW",
  "trRtvNhfJhSzzSTFVhQQZQhHGphP",
  "CnLMBWLwDMgMcwwdngdHGPVTQGpTHZdGPGpd",
  "LLDqcDgwqCMnLWqtvzrzbbtJqPjJ",
  "wQQwHNQLmbWQbQRHwHNFBbwqPfjqlzRMGRqzpSfvPlzplM",
  "nCtGCZZtsGsrtDMZpfMpSlMlvlZq",
  "cJctJCgVJsCJnDTsCthGhGLwBWBbbQmLbgQLQQdWbbbQ",
  "ZWnNlTNTnhhQQlDNdmmpwrrrqBwjwjZd",
  "GzvlVRSfvMVMvGlSpdCCdjmfpmBCdsqB",
  "bzlFlLzJWLHHttLL",
  "SmzFhVDzrmSrszVDVhSVbhZcCZdfZNcnMfMbZnNN",
  "PTTRGqwqTqWRwLgTLTZGnCbZbNddZCCtMcNs",
  "sgPqPqgJgWWqjjwgwLLVFBFSVmvmBBrmJJDSvp",
  "CBccfSBhcSBddfgtlJmmmwmPRwmh",
  "FpTzzGWHWprgDtJlDZDPFR",
  "HbbTzWnTrnWtCbQBbQqQbSjf",
  "fPHspCjgwZggSvZQ",
  "RrNhzFZFcNzFLNLNwQlSlLnv",
  "TRFrcDVrrRmrhFRZzVrczqhRpjqjsssCpfHjsCdpsPfpjCMC",
  "ZBnBTMVTSbGbTVTGbCPgqsgPtHtgCcPtBB",
  "ldDrmnnNrzhdhfgcsHqcsfCcsCHg",
  "zFdrzNdzQNDDhFdWldDrJTbZTbLZJVVVpMVWVnLS",
  "pLnpQNhBbnWvbsWm",
  "FrFwjlTPTdTqqrDZWbvmZbpSgmJWvbgS",
  "RqDqRrdGFpGRFrFFdTNzCcHcHLHBzQCcNNGN",
  "bvRCtbtCPfSGtCcvCbPNlglqgqlGZMzTgnlZnq",
  "hrmWWFspsHWrzNwTnFlTMTwFFn",
  "HpjJDWBQmmQdRffbPtSzdJ",
  "GpHjFsjMFpCpMWjMGCqWmmqrWQtmthdbDbbD",
  "fzgLTJwJPSgJgzSzPfhmqmQhQHzQtbQDrrmq",
  "RNlBRwHfRJHLLfHTwLSBppNGvjNMFFCVpVFcvcFC",
  "SfQnfSFHfnvMtQQSnHJtMffsdTlZtdZmtllmTlmlRRbBRLDb",
  "hrwhWWwqzPrcCzwwzmPlRbdmlQDTPPBLDl",
  "CpwCzrwGzNCWrJnMvpMvfJVFvQ",
  "rCRPpgSggcpqrhPrCDDTLsMLDSDGLTMGVs",
  "HdvzmRWmlHzwvWHvRHRvHJbDFsdMssQQVGMDTMDLVLLFLT",
  "JBlBnnWBJlCqZRRqRBpr",
  "GtZllZDlfDpGHZtZBGBZpDmzQzzCSVVFHmmmsPCQWWSS",
  "JvFJJrwvNNcJTnbrTRNRSCzqwSsVPCPQqmCQszVm",
  "JLMnTbLnMgBhDFDf",
  "lffDhtgDJzCJNGGTzWTRRnRvBv",
  "qpbpdwqZwqZSwMPSqdQcQmTRnWvnBnRBQBtVnTvWmB",
  "SccbbwSbZbFPswpSZtgFlClLhgChhhNfJlFj",
  "ClmCjCJBjwBVwJGjlGNFJlVMHSrfpDpTfrHMcHTppQVrHp",
  "dRLZWLvWSHmTccWW",
  "ggtqzmRZnmhghZhZghntdqsvBbjlbNFFBPwNNJNNCBlwPGBz",
  "HZmsFZQpvZsWCZQvWrghGrhtgNzdHddHGh",
  "fWSbqWDJVwcSccNzrNhcBtGcgG",
  "VqVfTJnbWjqTSqbwDRfRvQvFpFLRpZsssQsCQZ",
  "FpFZNfplSTJmbZzddGzhDrWh",
  "LqLPPQjLLRMPqvjLLHQrLqrRWdzHnGhdthttGGbbDWhDDdWz",
  "sMLMgvRLgscrLrRQvwmTNNfpNplglplfmp",
  "MPVBmCmWGWRPPqRhLcnjcvjjcpjMvp",
  "tzwrwsJlrldJsrsrTtrzrTtSNnLJSShnjcncvnvqnSFnqN",
  "rswrzsbdwDHHbWZqVfWV",
  "dVmmMTmBPTrCBRMCqFHSWFFHWzCvCz",
  "jNqfGsDqtsjGjQjDlcJFFFznFtzznvtFpFFp",
  "fNNhgsDcfNflqchVRdgVrRPRdVTRRb",
  "HJPLwgLvjttmgHJFjwHgtlsBbNbbNsPpblspTllThT",
  "MzmcRRrdDMVTzbhNNSszhl",
  "mCDDVqdVcdDrqfcCnrFwtGwvngwvtWJtFjWW",
  "dFDpmttBlvNNgWlglNDBFttmTGHTcSSJJHHnMsJsGGSdqcJj",
  "zLbwMLVQbQRwVsJsSHSsHcJqbj",
  "wfVZLPzfZZmpMZZMBl",
  "PZHZMJSTBWHNWSHzVnhhfnhThhpnpC",
  "jFdBBtrFjpfnjfnf",
  "ccGrbblbGRDQMlvmQBvmBl",
  "PCCTsnbPbHDnlDfDNB",
  "rMjQltgSqtvMjScQggjfVVzBzFHzGfVGDLGBqB",
  "vdtrMSttcdwcpSQSdglMrtWRRPJZCpsRZJmWRRWChWPh",
  "pWzbsPCCPPpbptSMCJJwBQQGQt",
  "cDDmcTTRRqzFRddVTSJwMShMtBwhwQMDwv",
  "HldqVmVlZdLTcmRFdrngNNzrffjWpPLggP",
  "JPqvjJmmqvSLmPtpZdcftdmtfdCC",
  "swwhDRwBBHjFFBtBfZ",
  "RRzNQDwznDsDwWJjLNlrSPLSTr",
  "VQmdRLvDlmqZdFrBBJdW",
  "CMstGsnHnHGGMrMZwMpwBSbW",
  "GnsshssNfjtsnggnHCGhjtmfLQQczllvDRVTTQllQWlQ",
  "dhbNbswbwVdNtVdstBtgbNQTBCCSFTmfmMFmfRqQmmQM",
  "HFljLrvZfMQQQPvm",
  "WrpznLZZrnplpWbgdFcFsNzszgst",
  "LjddfTlMccnBfDQBtBQb",
  "ZRSNchHwhNNCHNSWPQFFFHDBBtnQDH",
  "CNpZshSZgpwJmpdLMlplMc",
  "bTmTFmqzgbBntRVsFvVwcv",
  "CZfMrlZLLLMlfPZRLRHGstnjGwtvGcsSVwtcSGvn",
  "ClZpMLCRMZMrHMLmWpqQBpzpgQzmbg",
  "jDmSSGWDDdWdSqqDDqCqpJzqRRqpJnRsMRcMzM",
  "lPgNPvPrrgNrPhNszFggnRzccbMJgz",
  "ZQTHQvQTZPrrQlBBrNvQZZGtTtGdsVCGsCTLLGDmLsjt",
  "rbCfBrbsvQqRFZRNZC",
  "HLSTcwqwZSQFFgRZ",
  "wdDwjpMHqJDTMTdqjlfBvGBhsbfhbsnb",
  "ZhZcHHHlhgchHhlCZZhLCCbGdrsBBGPNBjGbsjNNjnJnPn",
  "wtJqqwDqQQMQFqSqTzwzVTBnGdsjBdnMdPGBBsBdnrjr",
  "RVzJzmSVZmLLWpCc",
  "gdqjQQrlhhQlQrhsnjjhLgmmvmHBBmTmZRsHJzTBHRJv",
  "NwNnGNbGPbmTGpJzppBG",
  "nDnVDfMDrQqQStgM",
  "MLbgbppMMgLmHgQttGQJgJrBShwNShWBBSNNrwNqNN",
  "GnTFlzCVVwPRrVWhSw",
  "GnDDdvdnZDTdnGMsHbbttZgttLbc",
  "mdmPmjClrTzqttfm",
  "cpFnSbcQQsqNNtqWJzHS",
  "QFpcMMBcZtLpQBjVjZhlPjjVlwvw",
  "spVsPjTZZMpZMVLDjmdSQJCLJSmLzdJQdl",
  "HhRnNrqwMhNhnqnHwGNRFBNBrzSCSdQmQCdddbrQSSclSSbQ",
  "nFNqGRvqBfjMvTssfZ",
  "FjjzjnpFqqzFFqgFSZjBhHfHhnHRDDwfdTdLfD",
  "MmCMGCsMWbtJrtCWCbmsmWWhdLGGwRBwdfdLhdTLhHHTBd",
  "bJmtrRvRjgzFFvVq",
  "RWwWmVQGMFGmMGVCVWRRZSBgDdSdJGlSJpcBGGSlpJ",
  "HHhQThnjBDHfSBlS",
  "bPhNjbsssQzFNQqWmz",
  "FTDtrjqwwqGtDbGnfBlcnLcWBZwlWn",
  "mMhRMvJsJvJnMHCvHmhLZLQlhWQBBfPfLPBZ",
  "HRCCsdNdvNmCvggFStbzjbGSSjjn",
  "sLGddsvvcZmLvrLMGcMsVnTTlqlHCsTHHVVgVt",
  "wRbfJPbpNRffRJMBhpDntTCHFNVgqllFlqggHC",
  "DpfbPhRDJPMJppJwzfpbbDGSjrGZvdccQdjGvQZdvrLz",
  "wTwLNLVTqnLMsBwfMsJmCj",
  "JhlGvcdJhSFvFvvvMfgBpCzjzdCfsMMs",
  "DSlPPJSGWrDcFPhtFhWJZHQZLTQVnRWRbHbZHQQT",
  "TmTgTrPDNLNVlDrmlbgNmrSSGbzjZGMvjpZjvvphWMzW",
  "QtBfdfQcdfHtZcnZnGZzchnp",
  "HQHwRBGfBCGBtsrCNPDTmTlNLr",
  "bfNhjhNJDWhlWhlRRR",
  "SsscnHgnSnZnltqqfWRWrzZv",
  "cnfTMfmMnTnmFGsnTVLLLpQJbpbbjpdTdN",
  "BqwZzqRQQRRPSlFRQDDwdfWwhJphnfgfnpMdJfdM",
  "rcTLrcrvDDChWJhfpTgTJh",
  "DHGbGNVCZStGqSqS",
  "dlfdRNNfVdLwrRnwdwRmhLFsbsJJgLqbgCBWBCsW",
  "PHDppMPMHHDPzmBBCmWJqCmbJD",
  "HzzZHmZzQcNdRRdZwddr",
  "wrlshslPsSRfvrQvwbrslCDghtDgCVhDhBVJCFHddt",
  "mZnGpWpWzGTMqnFqDqJNDNFJVJqH",
  "LjpzGcjMGcTzcmmznWSRsfRPfcrbFQcfrwcv",
  "rWBmmmtNmmtBbtlwnhJJVZbw",
  "FsRcjGdLdvFslZbQJZwQps",
  "GHFGvMccFPjgDNbmWWBTTHNz",
  "GhHzmhmwlpbltGBmBmsZsBZsfCWC",
  "rgrcCCPdsWBgNVBD",
  "RnRMdQPMCqndSdQdcQhblpLLwhJbbpzGzwpS",
  "NNQtStFPpJwhRbRzRbqpZZ",
  "jLnmdJrrdDTdbgWbTbRW",
  "JHvnMCmDnMnMljLCDmMLjHNFGGNBPVtQQFtSNFQtPQBv",
  "BFbBRllFZJnPVJbV",
  "GpGHwgzcLhDcwttwthzzhHcPTjZjMgMVZjgZTMmTnMZWJVJm",
  "GccwhqcDtlrPqQrRNQ",
  "gWHWLgHBHQdFhjGGThTQhR",
  "pZsSMpZMJJSzMszzzqclpfjvrvvcRGGTcTVhbVvRbTGTRG",
  "lnMwsqZqsslpjlSMSsffZqqJBgHNNPNDWdLLgdDgdLHPWwCw",
  "qfNvBCBfBqfNMBqCZZfcnmnvtwScpwFSpSsSwt",
  "HzdVzLWPPGGDdnsswnztsRsnmn",
  "QddWVQgJPPHJTJbjBtNTTq",
  "DdRDDPRGGPGccfcbJwsbJWzsnznlLLWzWTLWhVVVVS",
  "CvCrNCqgFqvmqNZFZqqZvpWlVrlVhlhnTLShlDWnzVBD",
  "jvqpvpvpQNCQQCZZmmNgZfdGddRjJDPRMHcHJDHPJf",
  "ttdtBtPPMqWMdgPPBbVGWfTGTTzSVLfVrzCS",
  "ZpDpvRpZDDcmmjmZfLSrwzRnSVSnwTTR",
  "ZvQmjFVHJFDcQjDlZcDVHdqMNtqNBPtPJtbhhbdbts",
  "dGdwwLLpgwgssJpgssNhpJlnbfjnzFfcbfttGjzjlntf",
  "VQvDvHVVQHrQHDCZVBChrHFtzffnfltFFtncnvFtllMl",
  "VBShSqDVRVSTmppPwwsP",
  "fTFDTLNNzlcNrmDcrMDTFPwCSsbCbPPsnCPwLSPvbs",
  "ttQqhJtBRRGnvgHGnlSnbl",
  "hZBJlQBRjVRBRjhtRRMNFVmFmfDNrfWcFVmD",
  "mcTZFBFmqBjmBgPtCtPprmssStCP",
  "LWDQNqDJfQNJddnWfzhfsPRVppVVsSptftpVMS",
  "NDGnJDDDbzddWdNbGNQQLQbqqFBBFcjlZBlHjlZHGBTvZB",
  "PwDzvphPwVwWBqLLwnJWTq",
  "jdCGCgjmllCrmmlmjrbgmRdgJSSJJFLSSqJfLnqLLLbWffLB",
  "mRdjcMHgDpZhDqMZ",
  "cqLjhhrwZwJbBqZhMwbZZdGWdGSllWFvLFGQdnGFQG",
  "gHHVzzppRVggcgpcGWRQRSvdSvvGWvll",
  "HmNNHtVggHsHPtrhJsbjbwCrCqJc",
  "zqPvzLVvzFFQZzWpRLlmHRDHmRCHDH",
  "dNjnJGGrGdqqMprRlpqB",
  "GsgtjhSsSvvSFqvP",
  "pVrfzzjrjWVWTWjrNZvnJSJZqnnqnpSZZS",
  "bdQVQPRPDdcbRGPFddRVMVlZlMlBqSBBZSvSZwnwvJBS",
  "bFbcFbCPPCbbVHCCdVgWfrzjmWfrWrNWgHfT",
  "JgJqLjjjVGgdqGDZGzlGRStStT",
  "PHrHccmrMrTSMVStRtRR",
  "HWPWffNsrppfPWNsVFsmPNCJwwjdJdvdvnJwghBLJLpdLJ",
  "HtHvcnDSDgDcDHtpLrvwjwjfZMjffw",
  "CPWzdJdqVdWZpnLdwnrfdn",
  "GNCNmTQnPVRRglSlHsSG",
  "FJdhjTPbdPJjTPjTjPtSLsSBWWRcCvCvsBWztc",
  "MfGgrHMDDpMnZGDLCRLScCsBlgWvzB",
  "HnmpmNNHGZZpZZrnMPFFbNCNbFdTPVFFFN",
  "TJrrrJQTqJqmTltfRrgfgtgFFg",
  "jLRzBvBjjcnFBNwWlgBZFt",
  "RMjMCGpGzGznzhRmmPPDPsmMmPQmJs",
  "BZqwQCQZGZcVBczqBHtfbbbWfTqNWfMfPNqW",
  "LLpmFjpvpHrvRFSRDRMWbdbtfPWPbjtMgMtW",
  "SDnrpDprDFnQhZCVnhcH",
  "WTsBBQTfQQTTbJBbZbnfTsRFwFrjwjFlrRqvrrlqvWRV",
  "pGcShcGSLNJNHCLttlpllRFgpRFlRpgRrg",
  "GzcMLScSGJGtCbsbQfbZbMBnBn",
  "NGCLGjVjZjQwTGJRQdWM",
  "cFTcvSrFmnnpSmndMswsRMJWRwMHps",
  "rrrhhcTznqvzmcccvvmhgzqDgbgttlDtjjjlfVCfZCjZZV",
  "ccDMHddWNDnnNWMMzdHJJmSQhfQZfvQZflrZQfdVfLLZ",
  "bgBFRTwFtgqCgpRGFpvpVllZlhjrrlVlvj",
  "wtbBGPTPtRTgbCTBqFgGRwFnsWJnmDMsWMJJMzHPhDmJzP",
  "zsbsMtMMdnffBbzNsBtCCWLpLrCrcNLVDWVVcD",
  "TmPhJRvwmjmhFJwjjRPFPTvJGVCcCGBrDpccpDrCrWCVDVFZ",
  "QvSTvBhqwjPmwddHgtqMnllzMl",
  "gftDtqnpqzGZsFcthbtZ",
  "VlNPrBrRNrLBmdRVFCcGCZTFCsTCsbLL",
  "VdldlljlSNHBsSlqfgqMDDvzpHJHWg",
  "tQDLvFLcDrWrcnsHffCGgGHG",
  "ZRPTPJqhMZJZVllRZJPVZPRHnhCnfdssnCznzGhdgfwCHn",
  "qPqlPVlTlSqbZZVJplqlPDmrjWFtmLtFWgQvtmtFvp",
  "zlZzdNRPgGGzsLGCDBBtCDCtSncScP",
  "vWvHWbqjrFMbvrTWcVnQBBBSjLDcQJcL",
  "wfLHwfFqLFbhHvWhMWqwbwwRspssmzgpzGgmmNfmzmRGRz",
  "rPvLrQBvBLsLLdtrgssgZjwFwlnCFMtMFnlllnnb",
  "mNmmzpWHlzjlJMJb",
  "TVSVTWpqRWpSTqNbTVRBPDfLLPrSLrsfQrrvsf",
  "nRjpQWnQnRQzMjRdrtvvPCfmvGtPfMcCtG",
  "TDbrbhNZVbbbbwhDZDhbTTGfcftqcGVvmmcqcJCcCPmJ",
  "NLhrSwgwgnsLsQWljW",
  "JWqVSpGNPdNNzdZJJpMzHzwLgsMwzwQwMBgL",
  "clrlcvrRfccCtFbHrBWLgwLHmMHsHg",
  "DbfDFjcvRcvchWZVWdNpGZNqdh",
  "sdfvFLfmtszQwLfddRpmtDDBjVNWGMNQVQNMJGWJMj",
  "lccrncTZhqqcqhWggvrjMNMGrJMG",
  "SblShnZCqSbPhhbcbTTSZFdFsFpmdRwPwzvmswLtmm",
  "PGwwHpfnFSvVpWqWCQNNjCbbnW",
  "lmddlhcDRBlLRchdmzbNjqqWTcbNPNWTzz",
  "RBMrRdRhlDtPrJtfwFHpsvrHpFSrFw",
  "hhwlglFFSQndLRFbmCbTTz",
  "NczHMMqzpzPcpfBffcmTrdfGbbRbGrdGrLCL",
  "qNzNPqMjcqNBWWccBHsZPDhJnllwnwvJvQnJhQsgvD",
  "mbmvmvbbprZmlFmZbFgLffgQtFNHNhfqQtNQ",
  "SJcdzjSJBzdBdJDzQhhLQfqzNQQHggRL",
  "jwDwcTTDThvTZPPW",
  "FSVBBBvHvCpVVDDGcGwNNhhctwMvMc",
  "fLLZsZVQmjfTfqQRmQhhtgbbJbGJRghtcGct",
  "qTsTQdqjVfqdVdZZqVLpCpzSpdppBlSpCFdHSC",
  "sQQhWsMmQshlhmMQZFDHDJFjgjzHZgcHdH",
  "LnwnpNRrnrbCqqLpwnqfnLcvFHJFzNcHzJcgJJHgdDgN",
  "wCbnpCfPCVqwwnrrbbPRGMMlSllmlTTmsThVMlsd",
  "pzrprfwgbwtwqzrCWbqCwqSMvddHdDSvtHRlDnRRDddD",
  "zQLzQQjPBPFcLcQFTFsmNQzcMNdDdvnldHHvdvnDnRnlvRnJ",
  "cTZGzzscLcPrqrfrZqqbVV",
  "DcSdcTwDLmcwDwvWssGfJfcJQZPGnfcs",
  "FlHFMgtgNggpsztMHMqpjgBBnCfPflfQnZCQBBCnRPZC",
  "gpVjqNVrHFtjqqzSLDTSmTDwwrmhbs",
  "MLMzJTsZzZMgMLgHMmVmdCVhCBlQwDwwhChD",
  "vtPRQpbqCldwdtBC",
  "bQqFbnQbcFfjPRFPQnTrMMgcJgJrssrzgrgS",
  "mtdGJmQRFmdtQvdvtRtdHzHzqZqpHFzZnCzhZjjH",
  "fPwVlllswMVNPfBDDlNVsMsfcBjchHncqzjZbpzjcqCnpHHn",
  "rlsNPWNlhWTPMMNPfwNWTLQRvQLLmgvSJvRJgTRG",
  "TwnqhqqgvQnGBGmBDp",
  "SMjclJSjjVJgCzCzNgpmdBpmBGspRBmpDDVB",
  "JjMCgMMHMMZNStllZSNHhPqFhFWfqPPqTqhLFqtL",
  "lRQPtjPRlDdStDSlPmvllvLsCphFfCHLHggspgFmsFLH",
  "qwpTNprcbNWVHLrfFssBgFCM",
  "NTWTnzTTWGZZZVRSRRQGpdDtSQRp",
  "gpwTPNPBPTdLLLLVGl",
  "jSHdjzZHMcDVtDvFjtCF",
  "HqfZMHzbcqRRRWgdqPmBBBNmwW",
  "PvSBtdFgvSmBPngFBTBjbSjwwpGjsppMjNpMjj",
  "VZLfVQLzQQQhllpcNcwbssvwwwZj",
  "vHWLVVqWTmTgttgq",
  "CNRmNRFNRCWbWNCrlmfGlWqFLsDZQZBZzgwQZsBsDZZCzczB",
  "MSjdVHvHnDDhHvdwBwssZVzwcgLcQg",
  "HnMMTdttHSHSpHvDddpSHTjWlNWFlmRtRmRbqGfqGGNNfR",
  "fBLTDppznrfTndfnfTzTLPvZvvHVbRbggjvzVbzvbV",
  "mwmDGGlqDhMqthGqhJMWmlNVRZPHjgwjjRZbbHRgRHvv",
  "DmhsJsshWGhSGlmlmrdcLLsTBBfcfnBppc",
  "mbCGFFmGmcdTrCTQdh",
  "MJHfJNLllJffPLRTdBqTRQNcqQGB",
  "fPJHfSSSWfSLDMLWGHDMLDFmznmsjmvZwzvjZjbvbZ",
  "pPvpJSfZTTvCzNZczzQZchcj",
  "svbHWsqsvbsMFtVHgVtcRQcDlQRRRQLjlqjczj",
  "tBsgvHVMFggbgFrgWnwSndfBmmBJfPSfpn",
  "jwbwfjSbwjVSjvZPzWSvhvhQlCsBFgLRLLgBLRClLLFQQw",
  "GdNJHpmHTDnTNJqnFCgBLFLFzFtsQRCd",
  "NpMJHpnMrDpJGTHqTTmJHTPjfcvbWfrffVzvZfVWSbjz",
  "wFwpqWwwpqwtqqrbCFtptDmCcfNhNRzRBZRRJRChVNBZBJ",
  "svlvjHsQlvdlvMLdlvPSSLtzzczcNhJthfNtRcNMJNMc",
  "HvvPLSHjgltjsvqwbbnmWmDpgwTT",
  "zhCmPVwwChdCBtsWnNWswBWr",
  "GJJSfSgFpjJjGgpfpgrcNNstvnBHNnHLtFHr",
  "jgDTfjpMgZMGMGJTMMJRhzZPCzbhVlPqdNCbhd",
  "bDbQQmVDRpDNbRQlfQQZnfwTlllfsT",
  "FChzzBWhVzrgMwffJwlnngnTlJ",
  "MCvqvhFzcHCChjtpNNVLppGmbq",
  "bZZzJnccqdzcLhrcQDLrDs",
  "FfCfWVfjWTFClClfwjWCfGGwhZSDhSLsSSRpZprLph",
  "mFmTMmFjMMWFfZtttflWjmWTngNHJHggJJHtzgnJvBtBgHdv",
];
// create a list with backpack compartments (firstBackpackList and second)

let backpack1 = [];
let backpack2 = [];
let firstBackpackList = [];
let secondBackpackList = [];

class Backpack {
  constructor(items) {
    this.items = items;
  }
}
data.forEach((element) => {
  backpack1 = [];
  backpack2 = [];
  const number = element.length / 2 - 1;
  for (let num = 0; num <= number; num++) {
    backpack1.push(element[num]);
  }
  for (let num = number + 1; num <= element.length - 1; num++) {
    backpack2.push(element[num]);
  }
  const elfBp1 = new Backpack(backpack1);
  firstBackpackList.push(elfBp1);
  const elfBp2 = new Backpack(backpack2);
  secondBackpackList.push(elfBp2);
});
// print a list with compartments for each backpack
console.log(firstBackpackList);
console.log(secondBackpackList);

// compare compartments of backpacks
let listOfItems = [];

const compareBackpacks = (totalBackpacks) => {
  for (let i = totalBackpacks.length - 1; i >= 0; i--) {
    let temporary = [];
    firstBackpackList[i].items.forEach((element) => {
      if (secondBackpackList[i].items.includes(element)) {
        if (!temporary.includes(element)) {
          temporary.push(element);
        } else {
          return;
        }
      }
    });
    listOfItems.push(...temporary);
  }
};

compareBackpacks(firstBackpackList);
console.log("total backpacks each:", firstBackpackList.length);
console.log("ListOfItems:", listOfItems);

//points
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let sumOfPoints = [];

const finalSolution = () => {
  for (let i = listOfItems.length - 1; i >= 0; i--) {
    const check = listOfItems[i];
    for (let i = 0; i < 52; i++) {
      if (alphabet[i] == check) {
        sumOfPoints.push(i + 1);
      }
    }
  }
};
finalSolution();

// const calculatePoints = () => {
//   for (let i = alphabet.length - 1; i > 0; i--) {
//     if (listOfItems.includes(alphabet[i])) {
//       sumOfPoints.push(i + 1);
//     }
//   }
//   console.log(sumOfPoints);
// };
// calculatePoints();

const finalSum = sumOfPoints.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log("sum of points", sumOfPoints);
console.log("final sum:", finalSum);
