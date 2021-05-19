(this["webpackJsonpisosim-reactjs"] = this["webpackJsonpisosim-reactjs"] || []).push([[0], {
    137: function(e, a, t) {
        e.exports = t(169)
    },
    142: function(e, a, t) {},
    143: function(e, a, t) {},
    169: function(e, a, t) {
        "use strict";
        t.r(a);
        var n = t(0)
          , r = t.n(n)
          , o = t(14)
          , c = t.n(o)
          , i = (t(142),
        t(143),
        t(8))
          , s = t(9)
          , l = t(12)
          , u = t(11)
          , d = t(5)
          , h = t(13)
          , p = t(21)
          , m = t.n(p)
          , y = t(91)
          , g = t(232)
          , C = t(172)
          , E = t(37)
          , f = t(218)
          , v = t(241)
          , b = t(233)
          , S = function e() {
            Object(i.a)(this, e),
            this.baseUrl = "",
            this.sendMsgUrl = this.baseUrl + "/iso/v1/send",
            this.loadMsgUrl = this.baseUrl + "/iso/v1/loadmsg",
            this.allSpecsUrl = this.baseUrl + "/iso/v1/specs",
            this.templateUrl = this.baseUrl + "/iso/v1/template",
            this.parseTraceUrl = this.baseUrl + "/iso/v1/parse",
            this.saveMsgUrl = this.baseUrl + "/iso/v1/save",
            this.pinGenUrl = this.baseUrl + "/iso/v1/crypto/pin_gen",
            this.macGenUrl = this.baseUrl + "/iso/v1/crypto/mac_gen",
            this.logHistUrl = this.baseUrl + "/iso/v1/websim/msg_hist/last_n"
        };
        S.FixedField = "Fixed",
        S.VariableField = "Variable",
        S.BitmappedField = "Bitmapped";
        var A = new S
          , I = t(239)
          , D = t(214)
          , N = t(215)
          , O = t(216)
          , M = t(217)
          , T = function(e) {
            function a(e) {
                var t;
                return Object(i.a)(this, a),
                (t = Object(l.a)(this, Object(u.a)(a).call(this, e))).state = {
                    show: e.show
                },
                t.handleClose = t.handleClose.bind(Object(d.a)(t)),
                t
            }
            return Object(h.a)(a, e),
            Object(s.a)(a, [{
                key: "handleClose",
                value: function() {
                    this.setState({
                        show: !1
                    }),
                    this.props.onClose()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e, a, t) {
                    !0 === this.props.show && !1 === a.show && this.setState({
                        show: !0
                    })
                }
            }, {
                key: "render",
                value: function() {
                    return r.a.createElement(I.a, {
                        open: this.state.show,
                        onClose: this.handleClose,
                        "aria-labelledby": "alert-dialog-title",
                        "aria-describedby": "alert-dialog-description"
                    }, r.a.createElement(D.a, {
                        id: "alert-dialog-title"
                    }, "Alert!"), r.a.createElement(N.a, null, r.a.createElement(O.a, {
                        id: "alert-dialog-description"
                    }, this.props.msg)), r.a.createElement(M.a, null, r.a.createElement(C.a, {
                        onClick: this.handleClose,
                        color: "primary"
                    }, "OK")))
                }
            }]),
            a
        }(r.a.Component)
          , R = function(e) {
            function a(e) {
                var t;
                Object(i.a)(this, a),
                (t = Object(l.a)(this, Object(u.a)(a).call(this, e))).from = 0,
                t.to = 0,
                t.panID = 0,
                t.field = t.props.field;
                var n = ""
                  , r = t.field.PinGenProps;
                if (0 !== t.field.PinGenProps.PANFieldID && (t.panID = t.field.PinGenProps.PANFieldID),
                0 !== r.PANFieldID && "" !== r.PANExtractParams && r.PANExtractParams.match("[0-9]+:[0-9]+")) {
                    var o = r.PANExtractParams.split(":")
                      , c = Object(E.a)(o, 2);
                    t.from = c[0],
                    t.to = c[1]
                }
                var s = "";
                if (t.props.isoMsg) {
                    var h = t.props.isoMsg.get(t.panID);
                    h && (n = s = h.state.fieldValue,
                    t.from >= 0 && t.to > t.from && (n = h.state.fieldValue.substring(t.from, t.to)))
                } else
                    t.state = {
                        pinFormat: "ISO0",
                        pan: n,
                        clearPin: "",
                        pinKey: ""
                    };
                return "pin_gen" === t.field.GenType && (t.state = {
                    pinFormat: t.field.PinGenProps.PINFormat,
                    pan: n,
                    originalPan: s,
                    clearPin: t.field.PinGenProps.PINClear,
                    pinKey: t.field.PinGenProps.PINKey,
                    hasError: !1,
                    errorMsg: null
                }),
                t.generatePinBlock = t.generatePinBlock.bind(Object(d.a)(t)),
                t.panValueChanged = t.panValueChanged.bind(Object(d.a)(t)),
                t.formatChanged = t.formatChanged.bind(Object(d.a)(t)),
                t.keyValueChanged = t.keyValueChanged.bind(Object(d.a)(t)),
                t.pinValueChanged = t.pinValueChanged.bind(Object(d.a)(t)),
                t.doNothing = t.doNothing.bind(Object(d.a)(t)),
                t
            }
            return Object(h.a)(a, e),
            Object(s.a)(a, [{
                key: "doNothing",
                value: function() {}
            }, {
                key: "componentDidUpdate",
                value: function(e, a, t) {
                    if (this.props.isoMsg) {
                        var n = this.props.isoMsg.get(this.panID);
                        if (n && this.state.originalPan !== n.state.fieldValue) {
                            var r = n.state.fieldValue
                              , o = "";
                            o = this.from >= 0 && this.to > this.from ? n.state.fieldValue.substring(this.from, this.to) : n.state.fieldValue,
                            this.setState({
                                pan: o,
                                originalPan: r
                            })
                        }
                    }
                }
            }, {
                key: "generatePinBlock",
                value: function() {
                    var e = this;
                    if ("" !== this.state.pan)
                        if ("" === this.state.clearPin || this.state.clearPin.length < 4 || this.state.clearPin.length > 12)
                            this.setState({
                                pinError: !0
                            });
                        else if ("" === this.state.pinKey || 16 !== this.state.pinKey.length && 32 !== this.state.pinKey.length)
                            this.setState({
                                keyError: !0
                            });
                        else {
                            this.setState({
                                keyError: !1,
                                pinError: !1,
                                panError: !1
                            });
                            var a = {
                                PINClear: this.state.clearPin,
                                PINFormat: this.state.pinFormat,
                                PINKey: this.state.pinKey,
                                PAN: this.state.pan
                            };
                            m.a.post(A.pinGenUrl, JSON.stringify(a)).then((function(a) {
                                e.props.setPinBlock(a.data.PinBlock)
                            }
                            )).catch((function(a) {
                                var t = "Failed to generate PIN block: ";
                                a.error ? t += a.error : t += a,
                                e.setState({
                                    hasError: !0,
                                    errorMsg: t
                                }),
                                console.log("error= ", a)
                            }
                            ))
                        }
                    else
                        this.setState({
                            panError: !0
                        })
                }
            }, {
                key: "formatChanged",
                value: function(e) {
                    this.setState({
                        pinFormat: e.target.value
                    })
                }
            }, {
                key: "pinValueChanged",
                value: function(e) {
                    this.setState({
                        clearPin: e.target.value
                    })
                }
            }, {
                key: "panValueChanged",
                value: function(e) {
                    this.setState({
                        pan: e.target.value
                    })
                }
            }, {
                key: "keyValueChanged",
                value: function(e) {
                    this.setState({
                        pinKey: e.target.value
                    })
                }
            }, {
                key: "render",
                value: function() {
                    return "pin_gen" !== this.field.GenType ? null : r.a.createElement(r.a.Fragment, null, r.a.createElement(T, {
                        show: this.state.hasError,
                        msg: this.state.errorMsg,
                        onClose: this.doNothing
                    }), r.a.createElement(b.a, {
                        border: 1,
                        borderColor: "primary.main",
                        borderRadius: 4
                    }, r.a.createElement("div", {
                        style: {
                            paddingBottom: "10px",
                            padding: "5px"
                        }
                    }, r.a.createElement(f.a, {
                        container: !0,
                        spacing: 0
                    }, r.a.createElement(f.a, {
                        container: !0,
                        spacing: 1,
                        alignItems: "flex-start"
                    }, r.a.createElement(f.a, {
                        item: !0,
                        xs: 3
                    }, r.a.createElement(g.a, {
                        size: "small",
                        label: "Clear PIN",
                        value: this.state.clearPin,
                        onChange: this.pinValueChanged,
                        error: this.state.pinError,
                        variant: "outlined",
                        margin: "dense"
                    })), r.a.createElement(f.a, {
                        item: !0,
                        xs: 6
                    }, r.a.createElement(g.a, {
                        label: "PIN Key",
                        value: this.state.pinKey,
                        variant: "outlined",
                        onChange: this.keyValueChanged,
                        error: this.state.keyError,
                        margin: "dense",
                        fullWidth: !0
                    })), r.a.createElement(f.a, {
                        item: !0,
                        xs: 3
                    }, r.a.createElement(g.a, {
                        size: "small",
                        value: this.state.pinFormat,
                        select: !0,
                        fullWidth: !0,
                        label: "Format",
                        onChange: this.formatChanged,
                        variant: "outlined",
                        margin: "dense"
                    }, r.a.createElement(v.a, {
                        value: "ISO0"
                    }, "ISO-0"), r.a.createElement(v.a, {
                        value: "ISO1"
                    }, "ISO-1"), r.a.createElement(v.a, {
                        value: "ISO3"
                    }, "ISO-3"), r.a.createElement(v.a, {
                        value: "IBM3264"
                    }, "IBM-3264")))), r.a.createElement(f.a, {
                        container: !0,
                        spacing: 1,
                        alignItems: "flex-start"
                    }, r.a.createElement(f.a, {
                        item: !0,
                        xs: 12
                    }, r.a.createElement(g.a, {
                        label: "PAN",
                        value: this.state.pan,
                        variant: "outlined",
                        onChange: this.panValueChanged,
                        error: this.state.panError,
                        margin: "dense"
                    }))), r.a.createElement(f.a, {
                        container: !0,
                        spacing: 0,
                        justify: "flex-end",
                        alignItems: "flex-end"
                    }, r.a.createElement(f.a, {
                        item: !0,
                        xs: !0
                    }, r.a.createElement("div", {
                        style: {
                            float: "right"
                        }
                    }, r.a.createElement(C.a, {
                        size: "small",
                        variant: "contained",
                        onClick: this.generatePinBlock,
                        color: "primary"
                    }, "Generate"))))))))
                }
            }]),
            a
        }(r.a.Component)
          , U = new (function() {
            function e(a) {
                Object(i.a)(this, e),
                this.validate = this.validate.bind(this)
            }
            return Object(s.a)(e, [{
                key: "validate",
                value: function(e, a, t) {
                    var n = !1;
                    e.Type === S.FixedField && ("ASCII" === e.DataEncoding || "EBCDIC" === e.DataEncoding ? a.length !== e.FixedSize && (t.push('\u2b55 "'.concat(e.Name, '" should have a fixed size of ').concat(e.FixedSize, " but has ").concat(a.length)),
                    n = !0) : a.length !== 2 * e.FixedSize && (t.push('\u2b55 "'.concat(e.Name, '" should have a fixed size of ').concat(e.FixedSize, " but has ").concat(a.length / 2)),
                    n = !0));
                    var r = !1;
                    if ("BCD" !== e.DataEncoding && "BINARY" !== e.DataEncoding || (a.length % 2 !== 0 && (t.push('\u2b55 "'.concat(e.Name, '" should have even number of characters!')),
                    n = !0,
                    r = !0),
                    "BINARY" !== e.DataEncoding || a.match("^[0-9,a-f,A-F]+$") || (t.push('\u2b55 "'.concat(e.Name, '" supports only hex i.e 0-9,a-z,A-Z')),
                    n = !0),
                    "BCD" !== e.DataEncoding || a.match("^[0-9]+$") || (t.push('\u2b55 "'.concat(e.Name, '" supports only bcd i.e 0-9')),
                    n = !0)),
                    !r && e.Type === S.VariableField) {
                        var o = a.length;
                        "BCD" !== e.DataEncoding && "BINARY" !== e.DataEncoding || (o = a.length / 2),
                        e.MinSize > 0 && a.length < e.MinSize && (t.push('\u2b55 "'.concat(e.Name, " size of ").concat(o, " is less than required min of ").concat(e.MinSize, '" ')),
                        n = !0),
                        e.MaxSize > 0 && a.length > e.MaxSize && (t.push('\u2b55 "'.concat(e.Name, " size  of ").concat(o, " is greater than required max of ").concat(e.MaxSize, '" ')),
                        n = !0)
                    }
                    return n
                }
            }]),
            e
        }())
          , k = function() {
            function e() {
                Object(i.a)(this, e)
            }
            return Object(s.a)(e, null, [{
                key: "addFieldContent",
                value: function(a, t, n, r) {
                    var o = n.get(a.ID);
                    o.state.selected && (U.validate(a, o.state.fieldValue, r) ? o.setError(!0) : o.setError(!1),
                    t.push({
                        ID: a.ID,
                        Name: a.Name,
                        Value: o.state.fieldValue
                    })),
                    a.Children.forEach((function(a) {
                        o.state.selected && e.addFieldContent(a, t, n, r)
                    }
                    ))
                }
            }, {
                key: "getMsgContent",
                value: function(a, t, n) {
                    a.get("msg_template").fields.forEach((function(r) {
                        e.addFieldContent(r, t, a, n)
                    }
                    ))
                }
            }]),
            e
        }()
          , w = function(e) {
            function a(e) {
                var t;
                return Object(i.a)(this, a),
                (t = Object(l.a)(this, Object(u.a)(a).call(this, e))).field = t.props.field,
                t.state = {
                    macAlgo: t.field.MacGenProps.MacAlgo,
                    macKey: t.field.MacGenProps.MacKey,
                    hasError: !1,
                    errorMsg: null
                },
                t.generateMac = t.generateMac.bind(Object(d.a)(t)),
                t.algoChanged = t.algoChanged.bind(Object(d.a)(t)),
                t.keyValueChanged = t.keyValueChanged.bind(Object(d.a)(t)),
                t.doNothing = t.doNothing.bind(Object(d.a)(t)),
                t
            }
            return Object(h.a)(a, e),
            Object(s.a)(a, [{
                key: "doNothing",
                value: function() {
                    this.setState({
                        hasError: !1,
                        errorMsg: null
                    })
                }
            }, {
                key: "generateMac",
                value: function() {
                    var e = this;
                    if ("" === this.state.macKey || 16 !== this.state.macKey.length && 32 !== this.state.macKey.length)
                        this.setState({
                            keyError: !0
                        });
                    else {
                        this.setState({
                            keyError: !1
                        });
                        var a = []
                          , t = []
                          , n = {};
                        if (void 0 !== this.props.macData) {
                            if (0 === this.props.macData.length)
                                return void this.setState({
                                    hasError: !0,
                                    errorMsg: "Invalid MacData supplied."
                                });
                            this.setState({
                                hasError: !1,
                                errorMsg: null
                            });
                            var r = this.props.macData;
                            n = {
                                mac_algo: this.state.macAlgo,
                                mac_key: this.state.macKey,
                                mac_data: r
                            }
                        } else {
                            if (k.getMsgContent(this.props.isoMsg, a, t),
                            t.length > 0) {
                                var o = "";
                                return t.forEach((function(e) {
                                    return o += e + "\n"
                                }
                                )),
                                void this.setState({
                                    hasError: !0,
                                    errorMsg: o
                                })
                            }
                            n = {
                                mac_algo: this.state.macAlgo,
                                mac_key: this.state.macKey,
                                spec_id: this.props.isoMsg.get("spec_id"),
                                msg_id: this.props.isoMsg.get("msg_id"),
                                parsed_fields: a
                            }
                        }
                        m.a.post(A.macGenUrl, JSON.stringify(n)).then((function(a) {
                            e.setState({
                                hasError: !1,
                                errorMsg: null
                            }),
                            e.props.setMac(a.data.Mac)
                        }
                        )).catch((function(a) {
                            var t = "Failed to generate MAC: ";
                            a.error ? 400 === a.response.status && (t += a.response.data.error) : t += a,
                            e.setState({
                                hasError: !0,
                                errorMsg: t
                            }),
                            console.log("error= ", a)
                        }
                        ))
                    }
                }
            }, {
                key: "algoChanged",
                value: function(e) {
                    this.setState({
                        macAlgo: e.target.value
                    })
                }
            }, {
                key: "keyValueChanged",
                value: function(e) {
                    this.setState({
                        macKey: e.target.value
                    })
                }
            }, {
                key: "render",
                value: function() {
                    return "mac_gen" !== this.field.GenType ? null : r.a.createElement(r.a.Fragment, null, r.a.createElement(T, {
                        show: this.state.hasError,
                        msg: this.state.errorMsg,
                        onClose: this.doNothing
                    }), r.a.createElement(b.a, {
                        border: 1,
                        borderColor: "primary.main",
                        borderRadius: 4
                    }, r.a.createElement("div", {
                        style: {
                            paddingBottom: "10px",
                            padding: "5px"
                        }
                    }, r.a.createElement(f.a, {
                        container: !0,
                        spacing: 0
                    }, r.a.createElement(f.a, {
                        container: !0,
                        spacing: 1,
                        alignItems: "flex-start"
                    }, r.a.createElement(f.a, {
                        item: !0,
                        xs: 6
                    }, r.a.createElement(g.a, {
                        label: "MAC Key",
                        value: this.state.macKey,
                        variant: "outlined",
                        onChange: this.keyValueChanged,
                        error: this.state.keyError,
                        margin: "dense",
                        fullWidth: !0
                    })), r.a.createElement(f.a, {
                        item: !0,
                        xs: 4
                    }, r.a.createElement(g.a, {
                        size: "small",
                        value: this.state.macAlgo,
                        select: !0,
                        fullWidth: !0,
                        label: "MAC Algorithm",
                        onChange: this.algoChanged,
                        variant: "outlined",
                        margin: "dense"
                    }, r.a.createElement(v.a, {
                        value: "ANSIX9_19"
                    }, "ANSIX9_19")))), r.a.createElement(f.a, {
                        container: !0,
                        spacing: 0,
                        justify: "flex-end",
                        alignItems: "flex-end"
                    }, r.a.createElement(f.a, {
                        item: !0,
                        xs: !0
                    }, r.a.createElement("div", {
                        style: {
                            float: "right"
                        }
                    }, r.a.createElement(C.a, {
                        size: "small",
                        variant: "contained",
                        onClick: this.generateMac,
                        color: "primary"
                    }, "Generate"))))))))
                }
            }]),
            a
        }(r.a.Component)
          , P = function(e) {
            function a(e) {
                var t;
                return Object(i.a)(this, a),
                (t = Object(l.a)(this, Object(u.a)(a).call(this, e))).state = {
                    show: t.props.show,
                    value: t.props.value
                },
                t.closeThis = t.closeThis.bind(Object(d.a)(t)),
                t.valueChanged = t.valueChanged.bind(Object(d.a)(t)),
                t.setValue = t.setValue.bind(Object(d.a)(t)),
                t
            }
            return Object(h.a)(a, e),
            Object(s.a)(a, [{
                key: "valueChanged",
                value: function(e) {
                    this.setState({
                        value: e.target.value
                    })
                }
            }, {
                key: "closeThis",
                value: function() {
                    this.setState({
                        show: !0
                    }),
                    this.props.onClose(this.state.value)
                }
            }, {
                key: "setValue",
                value: function(e) {
                    this.setState({
                        value: e
                    })
                }
            }, {
                key: "componentDidUpdate",
                value: function(e, a, t) {
                    !1 === e.show && !0 === this.props.show && !1 === this.state.show ? this.setState({
                        show: !0,
                        value: this.props.value
                    }) : !1 === this.props.show && !0 === this.state.show && this.setState({
                        show: !1,
                        value: this.props.value
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = null;
                    return this.props.readOnly || ("pin_gen" === this.props.field.GenType ? e = r.a.createElement(R, {
                        field: this.props.field,
                        setPinBlock: this.setValue,
                        isoMsg: this.props.isoMsg
                    }) : "mac_gen" === this.props.field.GenType && (e = r.a.createElement(w, {
                        field: this.props.field,
                        setMac: this.setValue,
                        isoMsg: this.props.isoMsg
                    }))),
                    !0 === this.state.show ? r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                        style: {
                            width: "100%",
                            height: "100%",
                            paddingTop: "20px",
                            paddingBottom: "20px"
                        }
                    }, e, r.a.createElement("div", {
                        style: {
                            paddingBottom: "5px",
                            paddingTop: "10px"
                        }
                    }, r.a.createElement(g.a, {
                        fullWidth: !0,
                        rows: 4,
                        multiline: !0,
                        variant: "outlined",
                        label: "Field Value",
                        style: {
                            paddingBottom: "5px"
                        },
                        onChange: this.valueChanged,
                        disabled: this.props.readOnly,
                        value: this.state.value
                    }), r.a.createElement("div", {
                        style: {
                            float: "right",
                            paddingBottom: "5px"
                        }
                    }, r.a.createElement(C.a, {
                        size: "small",
                        variant: "contained",
                        color: "primary",
                        onClick: this.closeThis
                    }, " OK "))))) : null
                }
            }]),
            a
        }(r.a.Component)
          , F = t(122)
          , L = t(118)
          , B = t(237)
          , j = t(240)
          , x = function() {
            function e() {
                Object(i.a)(this, e)
            }
            return Object(s.a)(e, null, [{
                key: "generateValue",
                value: function(e) {
                    if ("date_time" == e.Hint.Type) {
                        if (e.Hint.Format) {
                            var a = new Date
                              , t = e.Hint.Format
                              , n = t.indexOf("YY");
                            return -1 != n && (t = function(e, a, t) {
                                var n = t.getFullYear()
                                  , r = "";
                                return r = n < 10 ? "000" + n : "" + n,
                                e = e.substr(0, a) + r + e.substr(a + 2)
                            }(t, n, a)),
                            -1 != (n = t.indexOf("yy")) && (t = function(e, a, t) {
                                var n = t.getFullYear().toString().substr(-2)
                                  , r = "";
                                return r = "" + n,
                                e = e.substr(0, a) + r + e.substr(a + 2)
                            }(t, n, a)),
                            -1 != (n = t.indexOf("MM")) && (t = function(e, a, t) {
                                var n = t.getMonth() + 1
                                  , r = "";
                                return r = n < 10 ? "0" + n : "" + n,
                                e = e.substr(0, a) + r + e.substr(a + 2)
                            }(t, n, a)),
                            -1 != (n = t.indexOf("dd")) && (t = function(e, a, t) {
                                var n = t.getDate()
                                  , r = "";
                                return r = n < 10 ? "0" + n : "" + n,
                                e.substr(0, a) + r + e.substr(a + 2)
                            }(t, n, a)),
                            -1 != (n = t.indexOf("HH")) && (t = function(e, a, t) {
                                var n = t.getHours()
                                  , r = "";
                                return r = n < 10 ? "0" + n : "" + n,
                                e = e.substr(0, a) + r + e.substr(a + 2)
                            }(t, n, a)),
                            -1 != (n = t.indexOf("mm")) && (t = function(e, a, t) {
                                var n = t.getMinutes()
                                  , r = "";
                                return r = n < 10 ? "0" + n : "" + n,
                                e = e.substr(0, a) + r + e.substr(a + 2)
                            }(t, n, a)),
                            -1 != (n = t.indexOf("ss")) && (t = function(e, a, t) {
                                var n = t.getSeconds()
                                  , r = "";
                                return r = n < 10 ? "0" + n : "" + n,
                                e = e.substr(0, a) + r + e.substr(a + 2)
                            }(t, n, a)),
                            t
                        }
                        return ""
                    }
                    return ""
                }
            }]),
            e
        }()
          , V = t(235);
        function G(e) {
            var a = r.a.useState(H[102])
              , t = Object(E.a)(a, 2)
              , n = t[0]
              , o = t[1];
            return r.a.useEffect((function() {
                0 == e.disabled && (e.value ? H.forEach((function(a) {
                    a.code == e.value && o(a)
                }
                )) : e.valueChanged(n.code))
            }
            ), []),
            r.a.useEffect((function() {
                H.forEach((function(a) {
                    a.code != e.value || o(a)
                }
                ))
            }
            ), [e.value]),
            r.a.createElement(V.a, {
                id: "ctry-code-box",
                options: H,
                disabled: e.disabled,
                value: n,
                onChange: function(a, t) {
                    null != t && (o(t),
                    e.valueChanged(t.code))
                },
                getOptionLabel: function(e) {
                    return e.country
                },
                style: {
                    width: "80%"
                },
                renderInput: function(e) {
                    return r.a.createElement(g.a, Object.assign({}, e, {
                        margin: "dense",
                        label: "Country Code",
                        variant: "standard"
                    }))
                }
            })
        }
        var H = [{
            code: "004",
            country: "Afghanistan"
        }, {
            code: "008",
            country: "Albania"
        }, {
            code: "010",
            country: "Antarctica"
        }, {
            code: "012",
            country: "Algeria"
        }, {
            code: "016",
            country: "American Samoa"
        }, {
            code: "020",
            country: "Andorra"
        }, {
            code: "024",
            country: "Angola"
        }, {
            code: "028",
            country: "Antigua and Barbuda"
        }, {
            code: "031",
            country: "Azerbaijan"
        }, {
            code: "032",
            country: "Argentina"
        }, {
            code: "036",
            country: "Australia"
        }, {
            code: "040",
            country: "Austria"
        }, {
            code: "044",
            country: "Bahamas"
        }, {
            code: "048",
            country: "Bahrain"
        }, {
            code: "050",
            country: "Bangladesh"
        }, {
            code: "051",
            country: "Armenia"
        }, {
            code: "052",
            country: "Barbados"
        }, {
            code: "056",
            country: "Belgium"
        }, {
            code: "060",
            country: "Bermuda"
        }, {
            code: "064",
            country: "Bhutan"
        }, {
            code: "068",
            country: "Bolivia (Plurinational State of)"
        }, {
            code: "070",
            country: "Bosnia and Herzegovina"
        }, {
            code: "072",
            country: "Botswana"
        }, {
            code: "074",
            country: "Bouvet Island"
        }, {
            code: "076",
            country: "Brazil"
        }, {
            code: "084",
            country: "Belize"
        }, {
            code: "086",
            country: "British Indian Ocean Territory"
        }, {
            code: "090",
            country: "Solomon Islands"
        }, {
            code: "092",
            country: "Virgin Islands (British)"
        }, {
            code: "096",
            country: "Brunei Darussalam"
        }, {
            code: "100",
            country: "Bulgaria"
        }, {
            code: "104",
            country: "Myanmar"
        }, {
            code: "108",
            country: "Burundi"
        }, {
            code: "112",
            country: "Belarus"
        }, {
            code: "116",
            country: "Cambodia"
        }, {
            code: "120",
            country: "Cameroon"
        }, {
            code: "124",
            country: "Canada"
        }, {
            code: "132",
            country: "Cabo Verde"
        }, {
            code: "136",
            country: "Cayman Islands"
        }, {
            code: "140",
            country: "Central African Republic"
        }, {
            code: "144",
            country: "Sri Lanka"
        }, {
            code: "148",
            country: "Chad"
        }, {
            code: "152",
            country: "Chile"
        }, {
            code: "156",
            country: "China"
        }, {
            code: "158",
            country: "Taiwan, Province of China"
        }, {
            code: "162",
            country: "Christmas Island"
        }, {
            code: "166",
            country: "Cocos (Keeling) Islands"
        }, {
            code: "170",
            country: "Colombia"
        }, {
            code: "174",
            country: "Comoros"
        }, {
            code: "175",
            country: "Mayotte"
        }, {
            code: "178",
            country: "Congo"
        }, {
            code: "180",
            country: "Congo, Democratic Republic of the"
        }, {
            code: "184",
            country: "Cook Islands"
        }, {
            code: "188",
            country: "Costa Rica"
        }, {
            code: "191",
            country: "Croatia"
        }, {
            code: "192",
            country: "Cuba"
        }, {
            code: "196",
            country: "Cyprus"
        }, {
            code: "203",
            country: "Czechia"
        }, {
            code: "204",
            country: "Benin"
        }, {
            code: "208",
            country: "Denmark"
        }, {
            code: "212",
            country: "Dominica"
        }, {
            code: "214",
            country: "Dominican Republic"
        }, {
            code: "218",
            country: "Ecuador"
        }, {
            code: "222",
            country: "El Salvador"
        }, {
            code: "226",
            country: "Equatorial Guinea"
        }, {
            code: "231",
            country: "Ethiopia"
        }, {
            code: "232",
            country: "Eritrea"
        }, {
            code: "233",
            country: "Estonia"
        }, {
            code: "234",
            country: "Faroe Islands"
        }, {
            code: "238",
            country: "Falkland Islands (Malvinas)"
        }, {
            code: "239",
            country: "South Georgia and the South Sandwich Islands"
        }, {
            code: "242",
            country: "Fiji"
        }, {
            code: "246",
            country: "Finland"
        }, {
            code: "248",
            country: "\xc5land Islands"
        }, {
            code: "250",
            country: "France"
        }, {
            code: "254",
            country: "French Guiana"
        }, {
            code: "258",
            country: "French Polynesia"
        }, {
            code: "260",
            country: "French Southern Territories"
        }, {
            code: "262",
            country: "Djibouti"
        }, {
            code: "266",
            country: "Gabon"
        }, {
            code: "268",
            country: "Georgia"
        }, {
            code: "270",
            country: "Gambia"
        }, {
            code: "275",
            country: "Palestine, State of"
        }, {
            code: "276",
            country: "Germany"
        }, {
            code: "288",
            country: "Ghana"
        }, {
            code: "292",
            country: "Gibraltar"
        }, {
            code: "296",
            country: "Kiribati"
        }, {
            code: "300",
            country: "Greece"
        }, {
            code: "304",
            country: "Greenland"
        }, {
            code: "308",
            country: "Grenada"
        }, {
            code: "312",
            country: "Guadeloupe"
        }, {
            code: "316",
            country: "Guam"
        }, {
            code: "320",
            country: "Guatemala"
        }, {
            code: "324",
            country: "Guinea"
        }, {
            code: "328",
            country: "Guyana"
        }, {
            code: "332",
            country: "Haiti"
        }, {
            code: "334",
            country: "Heard Island and McDonald Islands"
        }, {
            code: "336",
            country: "Holy See"
        }, {
            code: "340",
            country: "Honduras"
        }, {
            code: "344",
            country: "Hong Kong"
        }, {
            code: "348",
            country: "Hungary"
        }, {
            code: "352",
            country: "Iceland"
        }, {
            code: "356",
            country: "India"
        }, {
            code: "360",
            country: "Indonesia"
        }, {
            code: "364",
            country: "Iran (Islamic Republic of)"
        }, {
            code: "368",
            country: "Iraq"
        }, {
            code: "372",
            country: "Ireland"
        }, {
            code: "376",
            country: "Israel"
        }, {
            code: "380",
            country: "Italy"
        }, {
            code: "384",
            country: "C\xf4te d'Ivoire"
        }, {
            code: "388",
            country: "Jamaica"
        }, {
            code: "392",
            country: "Japan"
        }, {
            code: "398",
            country: "Kazakhstan"
        }, {
            code: "400",
            country: "Jordan"
        }, {
            code: "404",
            country: "Kenya"
        }, {
            code: "408",
            country: "Korea (Democratic People's Republic of)"
        }, {
            code: "410",
            country: "Korea, Republic of"
        }, {
            code: "414",
            country: "Kuwait"
        }, {
            code: "417",
            country: "Kyrgyzstan"
        }, {
            code: "418",
            country: "Lao People's Democratic Republic"
        }, {
            code: "422",
            country: "Lebanon"
        }, {
            code: "426",
            country: "Lesotho"
        }, {
            code: "428",
            country: "Latvia"
        }, {
            code: "430",
            country: "Liberia"
        }, {
            code: "434",
            country: "Libya"
        }, {
            code: "438",
            country: "Liechtenstein"
        }, {
            code: "440",
            country: "Lithuania"
        }, {
            code: "442",
            country: "Luxembourg"
        }, {
            code: "446",
            country: "Macao"
        }, {
            code: "450",
            country: "Madagascar"
        }, {
            code: "454",
            country: "Malawi"
        }, {
            code: "458",
            country: "Malaysia"
        }, {
            code: "462",
            country: "Maldives"
        }, {
            code: "466",
            country: "Mali"
        }, {
            code: "470",
            country: "Malta"
        }, {
            code: "474",
            country: "Martinique"
        }, {
            code: "478",
            country: "Mauritania"
        }, {
            code: "480",
            country: "Mauritius"
        }, {
            code: "484",
            country: "Mexico"
        }, {
            code: "492",
            country: "Monaco"
        }, {
            code: "496",
            country: "Mongolia"
        }, {
            code: "498",
            country: "Moldova, Republic of"
        }, {
            code: "499",
            country: "Montenegro"
        }, {
            code: "500",
            country: "Montserrat"
        }, {
            code: "504",
            country: "Morocco"
        }, {
            code: "508",
            country: "Mozambique"
        }, {
            code: "512",
            country: "Oman"
        }, {
            code: "516",
            country: "Namibia"
        }, {
            code: "520",
            country: "Nauru"
        }, {
            code: "524",
            country: "Nepal"
        }, {
            code: "528",
            country: "Netherlands"
        }, {
            code: "531",
            country: "Cura\xe7ao"
        }, {
            code: "533",
            country: "Aruba"
        }, {
            code: "534",
            country: "Sint Maarten (Dutch part)"
        }, {
            code: "535",
            country: "Bonaire, Sint Eustatius and Saba"
        }, {
            code: "540",
            country: "New Caledonia"
        }, {
            code: "548",
            country: "Vanuatu"
        }, {
            code: "554",
            country: "New Zealand"
        }, {
            code: "558",
            country: "Nicaragua"
        }, {
            code: "562",
            country: "Niger"
        }, {
            code: "566",
            country: "Nigeria"
        }, {
            code: "570",
            country: "Niue"
        }, {
            code: "574",
            country: "Norfolk Island"
        }, {
            code: "578",
            country: "Norway"
        }, {
            code: "580",
            country: "Northern Mariana Islands"
        }, {
            code: "581",
            country: "United States Minor Outlying Islands"
        }, {
            code: "583",
            country: "Micronesia (Federated States of)"
        }, {
            code: "584",
            country: "Marshall Islands"
        }, {
            code: "585",
            country: "Palau"
        }, {
            code: "586",
            country: "Pakistan"
        }, {
            code: "591",
            country: "Panama"
        }, {
            code: "598",
            country: "Papua New Guinea"
        }, {
            code: "600",
            country: "Paraguay"
        }, {
            code: "604",
            country: "Peru"
        }, {
            code: "608",
            country: "Philippines"
        }, {
            code: "612",
            country: "Pitcairn"
        }, {
            code: "616",
            country: "Poland"
        }, {
            code: "620",
            country: "Portugal"
        }, {
            code: "624",
            country: "Guinea-Bissau"
        }, {
            code: "626",
            country: "Timor-Leste"
        }, {
            code: "630",
            country: "Puerto Rico"
        }, {
            code: "634",
            country: "Qatar"
        }, {
            code: "638",
            country: "R\xe9union"
        }, {
            code: "642",
            country: "Romania"
        }, {
            code: "643",
            country: "Russian Federation"
        }, {
            code: "646",
            country: "Rwanda"
        }, {
            code: "652",
            country: "Saint Barth\xe9lemy"
        }, {
            code: "654",
            country: "Saint Helena, Ascension and Tristan da Cunha"
        }, {
            code: "659",
            country: "Saint Kitts and Nevis"
        }, {
            code: "660",
            country: "Anguilla"
        }, {
            code: "662",
            country: "Saint Lucia"
        }, {
            code: "663",
            country: "Saint Martin (French part)"
        }, {
            code: "666",
            country: "Saint Pierre and Miquelon"
        }, {
            code: "670",
            country: "Saint Vincent and the Grenadines"
        }, {
            code: "674",
            country: "San Marino"
        }, {
            code: "678",
            country: "Sao Tome and Principe"
        }, {
            code: "682",
            country: "Saudi Arabia"
        }, {
            code: "686",
            country: "Senegal"
        }, {
            code: "688",
            country: "Serbia"
        }, {
            code: "690",
            country: "Seychelles"
        }, {
            code: "694",
            country: "Sierra Leone"
        }, {
            code: "702",
            country: "Singapore"
        }, {
            code: "703",
            country: "Slovakia"
        }, {
            code: "704",
            country: "Viet Nam"
        }, {
            code: "705",
            country: "Slovenia"
        }, {
            code: "706",
            country: "Somalia"
        }, {
            code: "710",
            country: "South Africa"
        }, {
            code: "716",
            country: "Zimbabwe"
        }, {
            code: "724",
            country: "Spain"
        }, {
            code: "728",
            country: "South Sudan"
        }, {
            code: "729",
            country: "Sudan"
        }, {
            code: "732",
            country: "Western Sahara"
        }, {
            code: "740",
            country: "Suriname"
        }, {
            code: "744",
            country: "Svalbard and Jan Mayen"
        }, {
            code: "748",
            country: "Eswatini"
        }, {
            code: "752",
            country: "Sweden"
        }, {
            code: "756",
            country: "Switzerland"
        }, {
            code: "760",
            country: "Syrian Arab Republic"
        }, {
            code: "762",
            country: "Tajikistan"
        }, {
            code: "764",
            country: "Thailand"
        }, {
            code: "768",
            country: "Togo"
        }, {
            code: "772",
            country: "Tokelau"
        }, {
            code: "776",
            country: "Tonga"
        }, {
            code: "780",
            country: "Trinidad and Tobago"
        }, {
            code: "784",
            country: "United Arab Emirates"
        }, {
            code: "788",
            country: "Tunisia"
        }, {
            code: "792",
            country: "Turkey"
        }, {
            code: "795",
            country: "Turkmenistan"
        }, {
            code: "796",
            country: "Turks and Caicos Islands"
        }, {
            code: "798",
            country: "Tuvalu"
        }, {
            code: "800",
            country: "Uganda"
        }, {
            code: "804",
            country: "Ukraine"
        }, {
            code: "807",
            country: "North Macedonia"
        }, {
            code: "818",
            country: "Egypt"
        }, {
            code: "826",
            country: "United Kingdom of Great Britain and Northern Ireland"
        }, {
            code: "831",
            country: "Guernsey"
        }, {
            code: "832",
            country: "Jersey"
        }, {
            code: "833",
            country: "Isle of Man"
        }, {
            code: "834",
            country: "Tanzania, United Republic of"
        }, {
            code: "840",
            country: "United States of America"
        }, {
            code: "850",
            country: "Virgin Islands (U.S.)"
        }, {
            code: "854",
            country: "Burkina Faso"
        }, {
            code: "858",
            country: "Uruguay"
        }, {
            code: "860",
            country: "Uzbekistan"
        }, {
            code: "862",
            country: "Venezuela (Bolivarian Republic of)"
        }, {
            code: "876",
            country: "Wallis and Futuna"
        }, {
            code: "882",
            country: "Samoa"
        }, {
            code: "887",
            country: "Yemen"
        }, {
            code: "894",
            country: "Zambia"
        }];
        function K(e) {
            var a = r.a.useState(_[108])
              , t = Object(E.a)(a, 2)
              , n = t[0]
              , o = t[1];
            return r.a.useEffect((function() {
                0 == e.disabled && (e.value ? _.forEach((function(a) {
                    a.numericCode == e.value && o(a)
                }
                )) : e.valueChanged(n.numericCode))
            }
            ), []),
            r.a.useEffect((function() {
                _.forEach((function(a) {
                    a.numericCode != e.value || o(a)
                }
                ))
            }
            ), [e.value]),
            r.a.createElement(V.a, {
                id: "currency-code-box",
                disabled: e.disabled,
                options: _,
                value: n,
                onChange: function(a, t) {
                    null != t && (o(t),
                    e.valueChanged(t.numericCode))
                },
                getOptionLabel: function(e) {
                    return e.currency
                },
                style: {
                    width: "80%"
                },
                renderInput: function(e) {
                    return r.a.createElement(g.a, Object.assign({}, e, {
                        margin: "dense",
                        label: "Currency Code",
                        variant: "standard"
                    }))
                }
            })
        }
        var _ = [{
            country: "AFGHANISTAN",
            currency: "Afghani",
            alphaCode: "AFN",
            numericCode: "971"
        }, {
            country: "ALBANIA",
            currency: "Lek",
            alphaCode: "ALL",
            numericCode: "008"
        }, {
            country: "ALGERIA",
            currency: "Algerian Dinar",
            alphaCode: "DZD",
            numericCode: "012"
        }, {
            country: "AMERICAN SAMOA",
            currency: "US Dollar",
            alphaCode: "USD",
            numericCode: "840"
        }, {
            country: "ANDORRA",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "ANGOLA",
            currency: "Kwanza",
            alphaCode: "AOA",
            numericCode: "973"
        }, {
            country: "ANGUILLA",
            currency: "East Caribbean Dollar",
            alphaCode: "XCD",
            numericCode: "951"
        }, {
            country: "ANTIGUA AND BARBUDA",
            currency: "East Caribbean Dollar",
            alphaCode: "XCD",
            numericCode: "951"
        }, {
            country: "ARGENTINA",
            currency: "Argentine Peso",
            alphaCode: "ARS",
            numericCode: "032"
        }, {
            country: "ARMENIA",
            currency: "Armenian Dram",
            alphaCode: "AMD",
            numericCode: "051"
        }, {
            country: "ARUBA",
            currency: "Aruban Florin",
            alphaCode: "AWG",
            numericCode: "533"
        }, {
            country: "AUSTRALIA",
            currency: "Australian Dollar",
            alphaCode: "AUD",
            numericCode: "036"
        }, {
            country: "AUSTRIA",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "AZERBAIJAN",
            currency: "Azerbaijanian Manat",
            alphaCode: "AZN",
            numericCode: "944"
        }, {
            country: "BAHAMAS (THE)",
            currency: "Bahamian Dollar",
            alphaCode: "BSD",
            numericCode: "044"
        }, {
            country: "BAHRAIN",
            currency: "Bahraini Dinar",
            alphaCode: "BHD",
            numericCode: "048"
        }, {
            country: "BANGLADESH",
            currency: "Taka",
            alphaCode: "BDT",
            numericCode: "050"
        }, {
            country: "BARBADOS",
            currency: "Barbados Dollar",
            alphaCode: "BBD",
            numericCode: "052"
        }, {
            country: "BELARUS",
            currency: "Belarussian Ruble",
            alphaCode: "BYN",
            numericCode: "933"
        }, {
            country: "BELGIUM",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "BELIZE",
            currency: "Belize Dollar",
            alphaCode: "BZD",
            numericCode: "084"
        }, {
            country: "BENIN",
            currency: "CFA Franc BCEAO",
            alphaCode: "XOF",
            numericCode: "952"
        }, {
            country: "BERMUDA",
            currency: "Bermudian Dollar",
            alphaCode: "BMD",
            numericCode: "060"
        }, {
            country: "BHUTAN",
            currency: "Ngultrum",
            alphaCode: "BTN",
            numericCode: "064"
        }, {
            country: "BHUTAN",
            currency: "Indian Rupee",
            alphaCode: "INR",
            numericCode: "356"
        }, {
            country: "BOLIVIA (PLURINATIONAL STATE OF)",
            currency: "Boliviano",
            alphaCode: "BOB",
            numericCode: "068"
        }, {
            country: "BOLIVIA (PLURINATIONAL STATE OF)",
            currency: "Mvdol",
            alphaCode: "BOV",
            numericCode: "984"
        }, {
            country: "BONAIRE, SINT EUSTATIUS AND SABA",
            currency: "US Dollar",
            alphaCode: "USD",
            numericCode: "840"
        }, {
            country: "BOSNIA AND HERZEGOVINA",
            currency: "Convertible Mark",
            alphaCode: "BAM",
            numericCode: "977"
        }, {
            country: "BOTSWANA",
            currency: "Pula",
            alphaCode: "BWP",
            numericCode: "072"
        }, {
            country: "BOUVET ISLAND",
            currency: "Norwegian Krone",
            alphaCode: "NOK",
            numericCode: "578"
        }, {
            country: "BRAZIL",
            currency: "Brazilian Real",
            alphaCode: "BRL",
            numericCode: "986"
        }, {
            country: "BRITISH INDIAN OCEAN TERRITORY (THE)",
            currency: "US Dollar",
            alphaCode: "USD",
            numericCode: "840"
        }, {
            country: "BRUNEI DARUSSALAM",
            currency: "Brunei Dollar",
            alphaCode: "BND",
            numericCode: "096"
        }, {
            country: "BULGARIA",
            currency: "Bulgarian Lev",
            alphaCode: "BGN",
            numericCode: "975"
        }, {
            country: "BURKINA FASO",
            currency: "CFA Franc BCEAO",
            alphaCode: "XOF",
            numericCode: "952"
        }, {
            country: "BURUNDI",
            currency: "Burundi Franc",
            alphaCode: "BIF",
            numericCode: "108"
        }, {
            country: "CABO VERDE",
            currency: "Cabo Verde Escudo",
            alphaCode: "CVE",
            numericCode: "132"
        }, {
            country: "CAMBODIA",
            currency: "Riel",
            alphaCode: "KHR",
            numericCode: "116"
        }, {
            country: "CAMEROON",
            currency: "CFA Franc BEAC",
            alphaCode: "XAF",
            numericCode: "950"
        }, {
            country: "CANADA",
            currency: "Canadian Dollar",
            alphaCode: "CAD",
            numericCode: "124"
        }, {
            country: "CAYMAN ISLANDS (THE)",
            currency: "Cayman Islands Dollar",
            alphaCode: "KYD",
            numericCode: "136"
        }, {
            country: "CENTRAL AFRICAN REPUBLIC (THE)",
            currency: "CFA Franc BEAC",
            alphaCode: "XAF",
            numericCode: "950"
        }, {
            country: "CHAD",
            currency: "CFA Franc BEAC",
            alphaCode: "XAF",
            numericCode: "950"
        }, {
            country: "CHILE",
            currency: "Unidad de Fomento",
            alphaCode: "CLF",
            numericCode: "990"
        }, {
            country: "CHILE",
            currency: "Chilean Peso",
            alphaCode: "CLP",
            numericCode: "152"
        }, {
            country: "CHINA",
            currency: "Yuan Renminbi",
            alphaCode: "CNY",
            numericCode: "156"
        }, {
            country: "CHRISTMAS ISLAND",
            currency: "Australian Dollar",
            alphaCode: "AUD",
            numericCode: "036"
        }, {
            country: "COCOS (KEELING) ISLANDS (THE)",
            currency: "Australian Dollar",
            alphaCode: "AUD",
            numericCode: "036"
        }, {
            country: "COLOMBIA",
            currency: "Colombian Peso",
            alphaCode: "COP",
            numericCode: "170"
        }, {
            country: "COLOMBIA",
            currency: "Unidad de Valor Real",
            alphaCode: "COU",
            numericCode: "970"
        }, {
            country: "COMOROS (THE)",
            currency: "Comoro Franc",
            alphaCode: "KMF",
            numericCode: "174"
        }, {
            country: "CONGO (THE DEMOCRATIC REPUBLIC OF THE)",
            currency: "Congolese Franc",
            alphaCode: "CDF",
            numericCode: "976"
        }, {
            country: "CONGO (THE)",
            currency: "CFA Franc BEAC",
            alphaCode: "XAF",
            numericCode: "950"
        }, {
            country: "COOK ISLANDS (THE)",
            currency: "New Zealand Dollar",
            alphaCode: "NZD",
            numericCode: "554"
        }, {
            country: "COSTA RICA",
            currency: "Costa Rican Colon",
            alphaCode: "CRC",
            numericCode: "188"
        }, {
            country: "CROATIA",
            currency: "Kuna",
            alphaCode: "HRK",
            numericCode: "191"
        }, {
            country: "CUBA",
            currency: "Peso Convertible",
            alphaCode: "CUC",
            numericCode: "931"
        }, {
            country: "CUBA",
            currency: "Cuban Peso",
            alphaCode: "CUP",
            numericCode: "192"
        }, {
            country: "CURA\xc7AO",
            currency: "Netherlands Antillean Guilder",
            alphaCode: "ANG",
            numericCode: "532"
        }, {
            country: "CYPRUS",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "CZECH REPUBLIC (THE)",
            currency: "Czech Koruna",
            alphaCode: "CZK",
            numericCode: "203"
        }, {
            country: "C\xd4TE D'IVOIRE",
            currency: "CFA Franc BCEAO",
            alphaCode: "XOF",
            numericCode: "952"
        }, {
            country: "DENMARK",
            currency: "Danish Krone",
            alphaCode: "DKK",
            numericCode: "208"
        }, {
            country: "DJIBOUTI",
            currency: "Djibouti Franc",
            alphaCode: "DJF",
            numericCode: "262"
        }, {
            country: "DOMINICA",
            currency: "East Caribbean Dollar",
            alphaCode: "XCD",
            numericCode: "951"
        }, {
            country: "DOMINICAN REPUBLIC (THE)",
            currency: "Dominican Peso",
            alphaCode: "DOP",
            numericCode: "214"
        }, {
            country: "ECUADOR",
            currency: "US Dollar",
            alphaCode: "USD",
            numericCode: "840"
        }, {
            country: "EGYPT",
            currency: "Egyptian Pound",
            alphaCode: "EGP",
            numericCode: "818"
        }, {
            country: "EL SALVADOR",
            currency: "El Salvador Colon",
            alphaCode: "SVC",
            numericCode: "222"
        }, {
            country: "EL SALVADOR",
            currency: "US Dollar",
            alphaCode: "USD",
            numericCode: "840"
        }, {
            country: "EQUATORIAL GUINEA",
            currency: "CFA Franc BEAC",
            alphaCode: "XAF",
            numericCode: "950"
        }, {
            country: "ERITREA",
            currency: "Nakfa",
            alphaCode: "ERN",
            numericCode: "232"
        }, {
            country: "ESTONIA",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "ETHIOPIA",
            currency: "Ethiopian Birr",
            alphaCode: "ETB",
            numericCode: "230"
        }, {
            country: "EUROPEAN UNION",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "FALKLAND ISLANDS (THE) [MALVINAS]",
            currency: "Falkland Islands Pound",
            alphaCode: "FKP",
            numericCode: "238"
        }, {
            country: "FAROE ISLANDS (THE)",
            currency: "Danish Krone",
            alphaCode: "DKK",
            numericCode: "208"
        }, {
            country: "FIJI",
            currency: "Fiji Dollar",
            alphaCode: "FJD",
            numericCode: "242"
        }, {
            country: "FINLAND",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "FRANCE",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "FRENCH GUIANA",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "FRENCH POLYNESIA",
            currency: "CFP Franc",
            alphaCode: "XPF",
            numericCode: "953"
        }, {
            country: "FRENCH SOUTHERN TERRITORIES (THE)",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "GABON",
            currency: "CFA Franc BEAC",
            alphaCode: "XAF",
            numericCode: "950"
        }, {
            country: "GAMBIA (THE)",
            currency: "Dalasi",
            alphaCode: "GMD",
            numericCode: "270"
        }, {
            country: "GEORGIA",
            currency: "Lari",
            alphaCode: "GEL",
            numericCode: "981"
        }, {
            country: "GERMANY",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "GHANA",
            currency: "Ghana Cedi",
            alphaCode: "GHS",
            numericCode: "936"
        }, {
            country: "GIBRALTAR",
            currency: "Gibraltar Pound",
            alphaCode: "GIP",
            numericCode: "292"
        }, {
            country: "GREECE",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "GREENLAND",
            currency: "Danish Krone",
            alphaCode: "DKK",
            numericCode: "208"
        }, {
            country: "GRENADA",
            currency: "East Caribbean Dollar",
            alphaCode: "XCD",
            numericCode: "951"
        }, {
            country: "GUADELOUPE",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "GUAM",
            currency: "US Dollar",
            alphaCode: "USD",
            numericCode: "840"
        }, {
            country: "GUATEMALA",
            currency: "Quetzal",
            alphaCode: "GTQ",
            numericCode: "320"
        }, {
            country: "GUERNSEY",
            currency: "Pound Sterling",
            alphaCode: "GBP",
            numericCode: "826"
        }, {
            country: "GUINEA",
            currency: "Guinea Franc",
            alphaCode: "GNF",
            numericCode: "324"
        }, {
            country: "GUINEA-BISSAU",
            currency: "CFA Franc BCEAO",
            alphaCode: "XOF",
            numericCode: "952"
        }, {
            country: "GUYANA",
            currency: "Guyana Dollar",
            alphaCode: "GYD",
            numericCode: "328"
        }, {
            country: "HAITI",
            currency: "Gourde",
            alphaCode: "HTG",
            numericCode: "332"
        }, {
            country: "HAITI",
            currency: "US Dollar",
            alphaCode: "USD",
            numericCode: "840"
        }, {
            country: "HEARD ISLAND AND McDONALD ISLANDS",
            currency: "Australian Dollar",
            alphaCode: "AUD",
            numericCode: "036"
        }, {
            country: "HOLY SEE (THE)",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "HONDURAS",
            currency: "Lempira",
            alphaCode: "HNL",
            numericCode: "340"
        }, {
            country: "HONG KONG",
            currency: "Hong Kong Dollar",
            alphaCode: "HKD",
            numericCode: "344"
        }, {
            country: "HUNGARY",
            currency: "Forint",
            alphaCode: "HUF",
            numericCode: "348"
        }, {
            country: "ICELAND",
            currency: "Iceland Krona",
            alphaCode: "ISK",
            numericCode: "352"
        }, {
            country: "INDIA",
            currency: "Indian Rupee",
            alphaCode: "INR",
            numericCode: "356"
        }, {
            country: "INDONESIA",
            currency: "Rupiah",
            alphaCode: "IDR",
            numericCode: "360"
        }, {
            country: "INTERNATIONAL MONETARY FUND (IMF) ",
            currency: "SDR (Special Drawing Right)",
            alphaCode: "XDR",
            numericCode: "960"
        }, {
            country: "IRAN (ISLAMIC REPUBLIC OF)",
            currency: "Iranian Rial",
            alphaCode: "IRR",
            numericCode: "364"
        }, {
            country: "IRAQ",
            currency: "Iraqi Dinar",
            alphaCode: "IQD",
            numericCode: "368"
        }, {
            country: "IRELAND",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "ISLE OF MAN",
            currency: "Pound Sterling",
            alphaCode: "GBP",
            numericCode: "826"
        }, {
            country: "ISRAEL",
            currency: "New Israeli Sheqel",
            alphaCode: "ILS",
            numericCode: "376"
        }, {
            country: "ITALY",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "JAMAICA",
            currency: "Jamaican Dollar",
            alphaCode: "JMD",
            numericCode: "388"
        }, {
            country: "JAPAN",
            currency: "Yen",
            alphaCode: "JPY",
            numericCode: "392"
        }, {
            country: "JERSEY",
            currency: "Pound Sterling",
            alphaCode: "GBP",
            numericCode: "826"
        }, {
            country: "JORDAN",
            currency: "Jordanian Dinar",
            alphaCode: "JOD",
            numericCode: "400"
        }, {
            country: "KAZAKHSTAN",
            currency: "Tenge",
            alphaCode: "KZT",
            numericCode: "398"
        }, {
            country: "KENYA",
            currency: "Kenyan Shilling",
            alphaCode: "KES",
            numericCode: "404"
        }, {
            country: "KIRIBATI",
            currency: "Australian Dollar",
            alphaCode: "AUD",
            numericCode: "036"
        }, {
            country: "KOREA (THE DEMOCRATIC PEOPLE\u2019S REPUBLIC OF)",
            currency: "North Korean Won",
            alphaCode: "KPW",
            numericCode: "408"
        }, {
            country: "KOREA (THE REPUBLIC OF)",
            currency: "Won",
            alphaCode: "KRW",
            numericCode: "410"
        }, {
            country: "KUWAIT",
            currency: "Kuwaiti Dinar",
            alphaCode: "KWD",
            numericCode: "414"
        }, {
            country: "KYRGYZSTAN",
            currency: "Som",
            alphaCode: "KGS",
            numericCode: "417"
        }, {
            country: "LAO PEOPLE\u2019S DEMOCRATIC REPUBLIC (THE)",
            currency: "Kip",
            alphaCode: "LAK",
            numericCode: "418"
        }, {
            country: "LATVIA",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "LEBANON",
            currency: "Lebanese Pound",
            alphaCode: "LBP",
            numericCode: "422"
        }, {
            country: "LESOTHO",
            currency: "Loti",
            alphaCode: "LSL",
            numericCode: "426"
        }, {
            country: "LESOTHO",
            currency: "Rand",
            alphaCode: "ZAR",
            numericCode: "710"
        }, {
            country: "LIBERIA",
            currency: "Liberian Dollar",
            alphaCode: "LRD",
            numericCode: "430"
        }, {
            country: "LIBYA",
            currency: "Libyan Dinar",
            alphaCode: "LYD",
            numericCode: "434"
        }, {
            country: "LIECHTENSTEIN",
            currency: "Swiss Franc",
            alphaCode: "CHF",
            numericCode: "756"
        }, {
            country: "LITHUANIA",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "LUXEMBOURG",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "MACAO",
            currency: "Pataca",
            alphaCode: "MOP",
            numericCode: "446"
        }, {
            country: "MADAGASCAR",
            currency: "Malagasy Ariary",
            alphaCode: "MGA",
            numericCode: "969"
        }, {
            country: "MALAWI",
            currency: "Kwacha",
            alphaCode: "MWK",
            numericCode: "454"
        }, {
            country: "MALAYSIA",
            currency: "Malaysian Ringgit",
            alphaCode: "MYR",
            numericCode: "458"
        }, {
            country: "MALDIVES",
            currency: "Rufiyaa",
            alphaCode: "MVR",
            numericCode: "462"
        }, {
            country: "MALI",
            currency: "CFA Franc BCEAO",
            alphaCode: "XOF",
            numericCode: "952"
        }, {
            country: "MALTA",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "MARSHALL ISLANDS (THE)",
            currency: "US Dollar",
            alphaCode: "USD",
            numericCode: "840"
        }, {
            country: "MARTINIQUE",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "MAURITANIA",
            currency: "Ouguiya",
            alphaCode: "MRU",
            numericCode: "929"
        }, {
            country: "MAURITIUS",
            currency: "Mauritius Rupee",
            alphaCode: "MUR",
            numericCode: "480"
        }, {
            country: "MAYOTTE",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "MEMBER COUNTRIES OF THE AFRICAN DEVELOPMENT BANK GROUP",
            currency: "ADB Unit of Account",
            alphaCode: "XUA",
            numericCode: "965"
        }, {
            country: "MEXICO",
            currency: "Mexican Peso",
            alphaCode: "MXN",
            numericCode: "484"
        }, {
            country: "MEXICO",
            currency: "Mexican Unidad de Inversion (UDI)",
            alphaCode: "MXV",
            numericCode: "979"
        }, {
            country: "MICRONESIA (FEDERATED STATES OF)",
            currency: "US Dollar",
            alphaCode: "USD",
            numericCode: "840"
        }, {
            country: "MOLDOVA (THE REPUBLIC OF)",
            currency: "Moldovan Leu",
            alphaCode: "MDL",
            numericCode: "498"
        }, {
            country: "MONACO",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "MONGOLIA",
            currency: "Tugrik",
            alphaCode: "MNT",
            numericCode: "496"
        }, {
            country: "MONTENEGRO",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "MONTSERRAT",
            currency: "East Caribbean Dollar",
            alphaCode: "XCD",
            numericCode: "951"
        }, {
            country: "MOROCCO",
            currency: "Moroccan Dirham",
            alphaCode: "MAD",
            numericCode: "504"
        }, {
            country: "MOZAMBIQUE",
            currency: "Mozambique Metical",
            alphaCode: "MZN",
            numericCode: "943"
        }, {
            country: "MYANMAR",
            currency: "Kyat",
            alphaCode: "MMK",
            numericCode: "104"
        }, {
            country: "NAMIBIA",
            currency: "Namibia Dollar",
            alphaCode: "NAD",
            numericCode: "516"
        }, {
            country: "NAMIBIA",
            currency: "Rand",
            alphaCode: "ZAR",
            numericCode: "710"
        }, {
            country: "NAURU",
            currency: "Australian Dollar",
            alphaCode: "AUD",
            numericCode: "036"
        }, {
            country: "NEPAL",
            currency: "Nepalese Rupee",
            alphaCode: "NPR",
            numericCode: "524"
        }, {
            country: "NETHERLANDS (THE)",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "NEW CALEDONIA",
            currency: "CFP Franc",
            alphaCode: "XPF",
            numericCode: "953"
        }, {
            country: "NEW ZEALAND",
            currency: "New Zealand Dollar",
            alphaCode: "NZD",
            numericCode: "554"
        }, {
            country: "NICARAGUA",
            currency: "Cordoba Oro",
            alphaCode: "NIO",
            numericCode: "558"
        }, {
            country: "NIGER (THE)",
            currency: "CFA Franc BCEAO",
            alphaCode: "XOF",
            numericCode: "952"
        }, {
            country: "NIGERIA",
            currency: "Naira",
            alphaCode: "NGN",
            numericCode: "566"
        }, {
            country: "NIUE",
            currency: "New Zealand Dollar",
            alphaCode: "NZD",
            numericCode: "554"
        }, {
            country: "NORFOLK ISLAND",
            currency: "Australian Dollar",
            alphaCode: "AUD",
            numericCode: "036"
        }, {
            country: "NORTHERN MARIANA ISLANDS (THE)",
            currency: "US Dollar",
            alphaCode: "USD",
            numericCode: "840"
        }, {
            country: "NORWAY",
            currency: "Norwegian Krone",
            alphaCode: "NOK",
            numericCode: "578"
        }, {
            country: "OMAN",
            currency: "Rial Omani",
            alphaCode: "OMR",
            numericCode: "512"
        }, {
            country: "PAKISTAN",
            currency: "Pakistan Rupee",
            alphaCode: "PKR",
            numericCode: "586"
        }, {
            country: "PALAU",
            currency: "US Dollar",
            alphaCode: "USD",
            numericCode: "840"
        }, {
            country: "PANAMA",
            currency: "Balboa",
            alphaCode: "PAB",
            numericCode: "590"
        }, {
            country: "PANAMA",
            currency: "US Dollar",
            alphaCode: "USD",
            numericCode: "840"
        }, {
            country: "PAPUA NEW GUINEA",
            currency: "Kina",
            alphaCode: "PGK",
            numericCode: "598"
        }, {
            country: "PARAGUAY",
            currency: "Guarani",
            alphaCode: "PYG",
            numericCode: "600"
        }, {
            country: "PERU",
            currency: "Nuevo Sol",
            alphaCode: "PEN",
            numericCode: "604"
        }, {
            country: "PHILIPPINES (THE)",
            currency: "Philippine Peso",
            alphaCode: "PHP",
            numericCode: "608"
        }, {
            country: "PITCAIRN",
            currency: "New Zealand Dollar",
            alphaCode: "NZD",
            numericCode: "554"
        }, {
            country: "POLAND",
            currency: "Zloty",
            alphaCode: "PLN",
            numericCode: "985"
        }, {
            country: "PORTUGAL",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "PUERTO RICO",
            currency: "US Dollar",
            alphaCode: "USD",
            numericCode: "840"
        }, {
            country: "QATAR",
            currency: "Qatari Rial",
            alphaCode: "QAR",
            numericCode: "634"
        }, {
            country: "REPUBLIC OF NORTH MACEDONIA",
            currency: "Denar",
            alphaCode: "MKD",
            numericCode: "807"
        }, {
            country: "ROMANIA",
            currency: "Romanian Leu",
            alphaCode: "RON",
            numericCode: "946"
        }, {
            country: "RUSSIAN FEDERATION (THE)",
            currency: "Russian Ruble",
            alphaCode: "RUB",
            numericCode: "643"
        }, {
            country: "RWANDA",
            currency: "Rwanda Franc",
            alphaCode: "RWF",
            numericCode: "646"
        }, {
            country: "R\xc9UNION",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "SAINT BARTH\xc9LEMY",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA",
            currency: "Saint Helena Pound",
            alphaCode: "SHP",
            numericCode: "654"
        }, {
            country: "SAINT KITTS AND NEVIS",
            currency: "East Caribbean Dollar",
            alphaCode: "XCD",
            numericCode: "951"
        }, {
            country: "SAINT LUCIA",
            currency: "East Caribbean Dollar",
            alphaCode: "XCD",
            numericCode: "951"
        }, {
            country: "SAINT MARTIN (FRENCH PART)",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "SAINT PIERRE AND MIQUELON",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "SAINT VINCENT AND THE GRENADINES",
            currency: "East Caribbean Dollar",
            alphaCode: "XCD",
            numericCode: "951"
        }, {
            country: "SAMOA",
            currency: "Tala",
            alphaCode: "WST",
            numericCode: "882"
        }, {
            country: "SAN MARINO",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "SAO TOME AND PRINCIPE",
            currency: "Dobra",
            alphaCode: "STN",
            numericCode: "930"
        }, {
            country: "SAUDI ARABIA",
            currency: "Saudi Riyal",
            alphaCode: "SAR",
            numericCode: "682"
        }, {
            country: "SENEGAL",
            currency: "CFA Franc BCEAO",
            alphaCode: "XOF",
            numericCode: "952"
        }, {
            country: "SERBIA",
            currency: "Serbian Dinar",
            alphaCode: "RSD",
            numericCode: "941"
        }, {
            country: "SEYCHELLES",
            currency: "Seychelles Rupee",
            alphaCode: "SCR",
            numericCode: "690"
        }, {
            country: "SIERRA LEONE",
            currency: "Leone",
            alphaCode: "SLL",
            numericCode: "694"
        }, {
            country: "SINGAPORE",
            currency: "Singapore Dollar",
            alphaCode: "SGD",
            numericCode: "702"
        }, {
            country: "SINT MAARTEN (DUTCH PART)",
            currency: "Netherlands Antillean Guilder",
            alphaCode: "ANG",
            numericCode: "532"
        }, {
            country: 'SISTEMA UNITARIO DE COMPENSACION REGIONAL DE PAGOS "SUCRE"',
            currency: "Sucre",
            alphaCode: "XSU",
            numericCode: "994"
        }, {
            country: "SLOVAKIA",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "SLOVENIA",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "SOLOMON ISLANDS",
            currency: "Solomon Islands Dollar",
            alphaCode: "SBD",
            numericCode: "090"
        }, {
            country: "SOMALIA",
            currency: "Somali Shilling",
            alphaCode: "SOS",
            numericCode: "706"
        }, {
            country: "SOUTH AFRICA",
            currency: "Rand",
            alphaCode: "ZAR",
            numericCode: "710"
        }, {
            country: "SOUTH SUDAN",
            currency: "South Sudanese Pound",
            alphaCode: "SSP",
            numericCode: "728"
        }, {
            country: "SPAIN",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }, {
            country: "SRI LANKA",
            currency: "Sri Lanka Rupee",
            alphaCode: "LKR",
            numericCode: "144"
        }, {
            country: "SUDAN (THE)",
            currency: "Sudanese Pound",
            alphaCode: "SDG",
            numericCode: "938"
        }, {
            country: "SURINAME",
            currency: "Surinam Dollar",
            alphaCode: "SRD",
            numericCode: "968"
        }, {
            country: "SVALBARD AND JAN MAYEN",
            currency: "Norwegian Krone",
            alphaCode: "NOK",
            numericCode: "578"
        }, {
            country: "SWAZILAND",
            currency: "Lilangeni",
            alphaCode: "SZL",
            numericCode: "748"
        }, {
            country: "SWEDEN",
            currency: "Swedish Krona",
            alphaCode: "SEK",
            numericCode: "752"
        }, {
            country: "SWITZERLAND",
            currency: "WIR Euro",
            alphaCode: "CHE",
            numericCode: "947"
        }, {
            country: "SWITZERLAND",
            currency: "Swiss Franc",
            alphaCode: "CHF",
            numericCode: "756"
        }, {
            country: "SWITZERLAND",
            currency: "WIR Franc",
            alphaCode: "CHW",
            numericCode: "948"
        }, {
            country: "SYRIAN ARAB REPUBLIC",
            currency: "Syrian Pound",
            alphaCode: "SYP",
            numericCode: "760"
        }, {
            country: "TAIWAN (PROVINCE OF CHINA)",
            currency: "New Taiwan Dollar",
            alphaCode: "TWD",
            numericCode: "901"
        }, {
            country: "TAJIKISTAN",
            currency: "Somoni",
            alphaCode: "TJS",
            numericCode: "972"
        }, {
            country: "TANZANIA, UNITED REPUBLIC OF",
            currency: "Tanzanian Shilling",
            alphaCode: "TZS",
            numericCode: "834"
        }, {
            country: "THAILAND",
            currency: "Baht",
            alphaCode: "THB",
            numericCode: "764"
        }, {
            country: "TIMOR-LESTE",
            currency: "US Dollar",
            alphaCode: "USD",
            numericCode: "840"
        }, {
            country: "TOGO",
            currency: "CFA Franc BCEAO",
            alphaCode: "XOF",
            numericCode: "952"
        }, {
            country: "TOKELAU",
            currency: "New Zealand Dollar",
            alphaCode: "NZD",
            numericCode: "554"
        }, {
            country: "TONGA",
            currency: "Pa\u2019anga",
            alphaCode: "TOP",
            numericCode: "776"
        }, {
            country: "TRINIDAD AND TOBAGO",
            currency: "Trinidad and Tobago Dollar",
            alphaCode: "TTD",
            numericCode: "780"
        }, {
            country: "TUNISIA",
            currency: "Tunisian Dinar",
            alphaCode: "TND",
            numericCode: "788"
        }, {
            country: "TURKEY",
            currency: "Turkish Lira",
            alphaCode: "TRY",
            numericCode: "949"
        }, {
            country: "TURKMENISTAN",
            currency: "Turkmenistan New Manat",
            alphaCode: "TMT",
            numericCode: "934"
        }, {
            country: "TURKS AND CAICOS ISLANDS (THE)",
            currency: "US Dollar",
            alphaCode: "USD",
            numericCode: "840"
        }, {
            country: "TUVALU",
            currency: "Australian Dollar",
            alphaCode: "AUD",
            numericCode: "036"
        }, {
            country: "UGANDA",
            currency: "Uganda Shilling",
            alphaCode: "UGX",
            numericCode: "800"
        }, {
            country: "UKRAINE",
            currency: "Hryvnia",
            alphaCode: "UAH",
            numericCode: "980"
        }, {
            country: "UNITED ARAB EMIRATES (THE)",
            currency: "UAE Dirham",
            alphaCode: "AED",
            numericCode: "784"
        }, {
            country: "UNITED KINGDOM OF GREAT BRITAIN AND NORTHERN IRELAND (THE)",
            currency: "Pound Sterling",
            alphaCode: "GBP",
            numericCode: "826"
        }, {
            country: "UNITED STATES MINOR OUTLYING ISLANDS (THE)",
            currency: "US Dollar",
            alphaCode: "USD",
            numericCode: "840"
        }, {
            country: "UNITED STATES OF AMERICA (THE)",
            currency: "US Dollar",
            alphaCode: "USD",
            numericCode: "840"
        }, {
            country: "UNITED STATES OF AMERICA (THE)",
            currency: "US Dollar (Next day)",
            alphaCode: "USN",
            numericCode: "997"
        }, {
            country: "URUGUAY",
            currency: "Uruguay Peso en Unidades Indexadas (URUIURUI)",
            alphaCode: "UYI",
            numericCode: "940"
        }, {
            country: "URUGUAY",
            currency: "Peso Uruguayo",
            alphaCode: "UYU",
            numericCode: "858"
        }, {
            country: "UZBEKISTAN",
            currency: "Uzbekistan Sum",
            alphaCode: "UZS",
            numericCode: "860"
        }, {
            country: "VANUATU",
            currency: "Vatu",
            alphaCode: "VUV",
            numericCode: "548"
        }, {
            country: "VENEZUELA (BOLIVARIAN REPUBLIC OF)",
            currency: "Bolivar",
            alphaCode: "VEF",
            numericCode: "937"
        }, {
            country: "VIET NAM",
            currency: "Dong",
            alphaCode: "VND",
            numericCode: "704"
        }, {
            country: "VIRGIN ISLANDS (BRITISH)",
            currency: "US Dollar",
            alphaCode: "USD",
            numericCode: "840"
        }, {
            country: "VIRGIN ISLANDS (U.S.)",
            currency: "US Dollar",
            alphaCode: "USD",
            numericCode: "840"
        }, {
            country: "WALLIS AND FUTUNA",
            currency: "CFP Franc",
            alphaCode: "XPF",
            numericCode: "953"
        }, {
            country: "WESTERN SAHARA",
            currency: "Moroccan Dirham",
            alphaCode: "MAD",
            numericCode: "504"
        }, {
            country: "YEMEN",
            currency: "Yemeni Rial",
            alphaCode: "YER",
            numericCode: "886"
        }, {
            country: "ZAMBIA",
            currency: "Zambian Kwacha",
            alphaCode: "ZMW",
            numericCode: "967"
        }, {
            country: "ZIMBABWE",
            currency: "Zimbabwe Dollar",
            alphaCode: "ZWL",
            numericCode: "932"
        }, {
            country: "\xc5LAND ISLANDS",
            currency: "Euro",
            alphaCode: "EUR",
            numericCode: "978"
        }];
        function W(e) {
            var a = r.a.useState(e.values[0])
              , t = Object(E.a)(a, 2)
              , n = t[0]
              , o = t[1];
            return r.a.useEffect((function() {
                0 == e.disabled && (e.value ? e.values.forEach((function(a) {
                    a.Value == e.value && o(a)
                }
                )) : e.valueChanged(n.Value))
            }
            ), []),
            r.a.useEffect((function() {
                e.values.forEach((function(a) {
                    a.Value != e.value || o(a)
                }
                ))
            }
            ), [e.value]),
            r.a.createElement(V.a, {
                id: "enum-code-box",
                options: e.values,
                disabled: e.disabled,
                value: n,
                onChange: function(a, t) {
                    null != t && (o(t),
                    e.valueChanged(t.value))
                },
                getOptionLabel: function(e) {
                    return e.Description
                },
                style: {
                    width: "80%"
                },
                renderInput: function(e) {
                    return r.a.createElement(g.a, Object.assign({}, e, {
                        margin: "dense",
                        variant: "standard"
                    }))
                }
            })
        }
        var z = function(e) {
            function a(e) {
                var t;
                Object(i.a)(this, a),
                (t = Object(l.a)(this, Object(u.a)(a).call(this, e))).fieldValueChanged = t.fieldValueChanged.bind(Object(d.a)(t)),
                t.fieldSelectionChanged = t.fieldSelectionChanged.bind(Object(d.a)(t)),
                t.onFieldUpdate = t.onFieldUpdate.bind(Object(d.a)(t)),
                t.appendFieldContent = t.appendFieldContent.bind(Object(d.a)(t)),
                t.setSelected = t.setSelected.bind(Object(d.a)(t)),
                t.setNewValue = t.setNewValue.bind(Object(d.a)(t)),
                t.showExpanded = t.showExpanded.bind(Object(d.a)(t)),
                t.closeExpanded = t.closeExpanded.bind(Object(d.a)(t)),
                t.getBgColor = t.getBgColor.bind(Object(d.a)(t)),
                t.setError = t.setError.bind(Object(d.a)(t)),
                t.toggleExpanded = t.toggleExpanded.bind(Object(d.a)(t)),
                t.onFocusLost = t.onFocusLost.bind(Object(d.a)(t)),
                t.applyPadding = t.applyPadding.bind(Object(d.a)(t)),
                t.setValue = t.setValue.bind(Object(d.a)(t));
                if (t.selectable = !0,
                t.props.readOnly) {
                    t.selectable = !1;
                    var n = !1
                      , r = t.props.id2Value.get(t.props.field.ID);
                    r && (n = !0),
                    t.state = {
                        fieldEditable: !0,
                        bgColor: "white",
                        hasError: !1,
                        selected: n,
                        id2Value: t.props.id2Value,
                        fieldValue: r,
                        expandBtnLabel: "+",
                        showExpanded: !1,
                        field: t.props.field
                    }
                } else {
                    var o = ""
                      , c = !1;
                    if (o = x.generateValue(t.props.field),
                    t.props.isoMsg.has(t.props.field.ID)) {
                        var s = t.props.isoMsg.get(t.props.field.ID);
                        o = s.state.fieldValue,
                        c = s.state.selected
                    }
                    if (a.MandatoryFields.includes(t.props.field.Name)) {
                        t.selectable = !1;
                        var h = !0;
                        "" === o && "Bitmap" === t.props.field.Name && (o = Array(192).fill("0").reduce((function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                              , a = arguments.length > 1 ? arguments[1] : void 0;
                            return e + a
                        }
                        ))),
                        "Bitmap" === t.props.field.Name && (h = !1),
                        t.state = {
                            fieldEditable: h,
                            bgColor: "white",
                            hasError: !1,
                            selected: !0,
                            fieldValue: o,
                            expandBtnLabel: "+",
                            showExpanded: !1,
                            field: t.props.field
                        }
                    } else
                        t.state = {
                            fieldEditable: !0,
                            bgColor: "white",
                            selected: c,
                            hasError: !1,
                            fieldValue: o,
                            expandBtnLabel: "+",
                            showExpanded: !1,
                            field: t.props.field
                        };
                    t.props.isoMsg.set(t.props.field.ID, Object(d.a)(t))
                }
                return t
            }
            return Object(h.a)(a, e),
            Object(s.a)(a, [{
                key: "getBgColor",
                value: function() {
                    return this.state.hasError ? "red" : "white"
                }
            }, {
                key: "setError",
                value: function(e) {
                    this.setState({
                        hasError: e
                    })
                }
            }, {
                key: "showExpanded",
                value: function() {
                    this.setState({
                        showExpanded: !0
                    })
                }
            }, {
                key: "toggleExpanded",
                value: function() {
                    this.state.showExpanded ? this.setState({
                        showExpanded: !1,
                        expandBtnLabel: "+"
                    }) : this.setState({
                        showExpanded: !0,
                        expandBtnLabel: "-"
                    })
                }
            }, {
                key: "closeExpanded",
                value: function() {
                    this.setState({
                        showExpanded: !1
                    })
                }
            }, {
                key: "setNewValue",
                value: function(e) {
                    var a = this.applyPadding(this.state.selected, e);
                    this.setState({
                        fieldValue: a,
                        showExpanded: !1,
                        selected: !0
                    }),
                    this.toggleExpanded()
                }
            }, {
                key: "setValue",
                value: function(e) {
                    this.setState({
                        fieldValue: e,
                        showExpanded: !1
                    })
                }
            }, {
                key: "componentDidUpdate",
                value: function(e, a, t) {
                    e.id2Value !== this.props.id2Value && this.setState({
                        fieldValue: this.props.id2Value.get(this.props.field.ID),
                        id2Value: this.props.id2Value
                    })
                }
            }, {
                key: "onFieldUpdate",
                value: function(e) {
                    var a = this;
                    if (this.props.field.Type === S.BitmappedField)
                        this.props.field.Children.forEach((function(t) {
                            if (t.Name === e.fieldName) {
                                var n = a.state.fieldValue;
                                t.Position > 64 && 64 == n.length && Array(64).fill("0").forEach((function(e) {
                                    return n += e
                                }
                                )),
                                t.Position > 128 && (64 == n.length ? Array(128).fill("0").forEach((function(e) {
                                    return n += e
                                }
                                )) : 128 == n.length && Array(64).fill("0").forEach((function(e) {
                                    return n += e
                                }
                                )));
                                var r = Array.from(n);
                                if ("FieldSelected" === e.ChangeType)
                                    r[t.Position - 1] = "1",
                                    t.Position > 64 && (r[0] = "1"),
                                    t.Position > 128 && (r[64] = "1");
                                else if ("FieldDeselected" === e.ChangeType) {
                                    r[t.Position - 1] = "0";
                                    for (var o = !0, c = 65; c <= 128; c++)
                                        if ("1" === r[c - 1]) {
                                            o = !1;
                                            break
                                        }
                                    o && (r[0] = "0"),
                                    o = !0;
                                    for (var i = 129; i <= 192; i++)
                                        if ("1" === r[i - 1]) {
                                            o = !1;
                                            break
                                        }
                                    o && (r[64] = "0")
                                }
                                var s = r.reduce((function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                                      , a = arguments.length > 1 ? arguments[1] : void 0;
                                    return e + a
                                }
                                ));
                                a.setState({
                                    fieldValue: s
                                })
                            }
                        }
                        ));
                    else {
                        var t = {
                            fieldName: this.props.field.Name
                        };
                        "FieldSelected" === e.ChangeType ? (this.setState({
                            selected: !0
                        }),
                        t.ChangeType = "FieldSelected") : "FieldDeselected" === e.ChangeType && (this.setState({
                            selected: !1
                        }),
                        t.ChangeType = "FieldDeselected"),
                        this.props.field.Children.forEach((function(t) {
                            "FieldSelected" === e.ChangeType ? a.props.isoMsg.get(t.ID).setSelected(!0) : "FieldDeselected" === e.ChangeType && a.props.isoMsg.get(t.ID).setSelected(!1)
                        }
                        )),
                        this.props.onFieldUpdate(t)
                    }
                }
            }, {
                key: "setSelected",
                value: function(e) {
                    var a = this
                      , t = this.applyPadding(e);
                    if (this.props.field.Children.forEach((function(t) {
                        a.props.isoMsg.get(t.ID).setSelected(e)
                    }
                    )),
                    e) {
                        var n = [];
                        U.validate(this.props.field, t, n) ? this.setState({
                            fieldValue: t,
                            hasError: !0,
                            errMsg: n[0],
                            selected: e
                        }) : this.setState({
                            fieldValue: t,
                            hasError: !1,
                            errMsg: null,
                            selected: e
                        })
                    } else
                        this.setState({
                            fieldValue: t,
                            hasError: !1,
                            errMsg: null,
                            selected: e
                        })
                }
            }, {
                key: "fieldSelectionChanged",
                value: function(e) {
                    var a = {
                        fieldName: this.props.field.Name
                    }
                      , t = !1;
                    e.target.checked ? (a.ChangeType = "FieldSelected",
                    t = !0) : a.ChangeType = "FieldDeselected",
                    this.props.field.Type !== S.BitmappedField && this.setSelected(t),
                    this.props.onFieldUpdate(a)
                }
            }, {
                key: "onFocusLost",
                value: function() {
                    var e = this.applyPadding(this.state.selected)
                      , a = [];
                    if (this.state.selected)
                        if (U.validate(this.props.field, e, a))
                            this.setState({
                                fieldValue: e,
                                hasError: !0,
                                errMsg: a[0]
                            });
                        else {
                            this.setState({
                                fieldValue: e,
                                hasError: !1,
                                errMsg: null
                            });
                            var t = {
                                fieldName: this.props.field.Name,
                                ChangeType: "ValueChanged",
                                Value: e
                            };
                            this.props.onFieldUpdate(t)
                        }
                    else
                        this.setState({
                            fieldValue: e,
                            hasError: !1,
                            errMsg: null
                        })
                }
            }, {
                key: "applyPadding",
                value: function(e) {
                    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                      , t = a;
                    "" === t && (t = this.state.fieldValue),
                    void 0 === t && (t = "");
                    var n = this.state.field;
                    if ("" === n.Padding || !e)
                        return t;
                    if ("Fixed" === n.Type) {
                        var r = "";
                        switch (n.DataEncoding) {
                        case "ASCII":
                        case "EBCDIC":
                            if (t.length < n.FixedSize) {
                                for (var o = 0; o < n.FixedSize - t.length; o++)
                                    "LEADING_ZEROES" !== n.Padding && "TRAILING_ZEROES" !== n.Padding || (r += "0"),
                                    "LEADING_SPACES" !== n.Padding && "TRAILING_SPACES" !== n.Padding || (r += " ");
                                n.Padding.startsWith("LEADING") ? t = r + t : t += r
                            }
                            break;
                        case "BCD":
                            var c = ""
                              , i = 2 * n.FixedSize;
                            if (t.length < i)
                                for (var s = 0; s < i - t.length; s++)
                                    c += "0";
                            "LEADING_ZEROES" === n.Padding ? t = c + t : "TRAILING_ZEROES" === n.Padding ? t += c : console.log("Unsupported padding - ".concat(n.Padding, " for Fixed BCD field"));
                            break;
                        case "BINARY":
                            var l = ""
                              , u = 2 * n.FixedSize;
                            if (t.length < u)
                                for (var d = 0; d < u - t.length; d++)
                                    n.Padding.endsWith("ZEROES") ? l += "0" : l += "F";
                            n.Padding.startsWith("LEADING_") ? t = l + t : n.Padding.startsWith("TRAILING_") && (t += l);
                            break;
                        default:
                            console.log("Unsupported field encoding type -" + n.DataEncoding)
                        }
                    }
                    return t
                }
            }, {
                key: "fieldValueChanged",
                value: function(e) {
                    this.setState({
                        hasError: !1,
                        errMsg: null,
                        fieldValue: e.target.value
                    })
                }
            }, {
                key: "appendFieldContent",
                value: function(e, t, n, o, c) {
                    var i = t.ID;
                    this.props.readOnly && (i = "response_seg_" + t.ID),
                    e.push(r.a.createElement(a, {
                        key: i,
                        field: t,
                        id2Value: o,
                        isoMsg: this.props.isoMsg,
                        readOnly: this.props.readOnly,
                        parentField: n,
                        level: c,
                        onFieldUpdate: this.onFieldUpdate
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    var e, a = this;
                    e = this.selectable ? r.a.createElement("td", {
                        align: "center"
                    }, r.a.createElement(B.a, {
                        type: "checkbox",
                        size: "small",
                        color: "primary",
                        checked: this.state.selected,
                        onChange: this.fieldSelectionChanged
                    })) : r.a.createElement("td", {
                        align: "center"
                    }, r.a.createElement(B.a, {
                        type: "checkbox",
                        size: "small",
                        color: "primary",
                        disabled: !0,
                        checked: this.state.selected,
                        onChange: this.fieldSelectionChanged
                    }));
                    var t = "";
                    this.props.field.ParentId > 0 && (t = "\u2937" + this.props.field.Position + " ");
                    var n = t + " Type: " + this.props.field.Type + " / ";
                    this.props.field.Type === S.FixedField ? n += "Length: " + this.props.field.FixedSize + " / Encoding: " + this.props.field.DataEncoding : this.props.field.Type === S.VariableField ? n += "Length Indicator: " + this.props.field.LengthIndicatorSize + " / Length Encoding: " + this.props.field.LengthEncoding + " / Data Encoding: " + this.props.field.DataEncoding : this.props.field.Type;
                    var o = [];
                    this.props.field.Children.forEach((function(e) {
                        return a.appendFieldContent(o, e, a.props.field, a.state.id2Value, a.props.level + 1)
                    }
                    ));
                    for (var c = "", i = 0; i < this.props.level; i++)
                        c += "\u2193";
                    var s = null;
                    if ("enumerated" == this.props.field.Hint.Type) {
                        var l = !1;
                        this.props.readOnly && (l = !0),
                        s = r.a.createElement(W, {
                            key: "fld_value_" + this.state.field.ID,
                            valueChanged: this.setValue,
                            disabled: l,
                            values: this.props.field.Hint.Values,
                            value: this.state.fieldValue
                        })
                    } else if ("country_code" == this.props.field.Hint.Type) {
                        var u = !1;
                        this.props.readOnly && (u = !0),
                        s = r.a.createElement(G, {
                            key: "fld_value_" + this.state.field.ID,
                            valueChanged: this.setValue,
                            disabled: u,
                            value: this.state.fieldValue
                        })
                    } else if ("currency_code" == this.props.field.Hint.Type) {
                        var d = !1;
                        this.props.readOnly && (d = !0),
                        s = r.a.createElement(K, {
                            key: "fld_value_" + this.state.field.ID,
                            valueChanged: this.setValue,
                            disabled: d,
                            value: this.state.fieldValue
                        })
                    } else
                        s = r.a.createElement(g.a, {
                            margin: "dense",
                            size: "small",
                            variant: "standard",
                            value: this.state.fieldValue,
                            error: this.state.hasError,
                            helperText: this.state.errMsg,
                            onChange: this.fieldValueChanged,
                            style: {
                                width: "70%"
                            },
                            disabled: this.props.readOnly || !this.state.fieldEditable,
                            key: "fld_value_" + this.state.field.ID,
                            onBlur: this.onFocusLost
                        });
                    return r.a.createElement(r.a.Fragment, null, r.a.createElement("tr", null, e, r.a.createElement(F.a, {
                        overlay: r.a.createElement(L.a, {
                            id: "hi",
                            style: {
                                fontSize: "10px"
                            }
                        }, n),
                        placement: "top"
                    }, r.a.createElement("td", {
                        style: {
                            width: "100px",
                            fontSize: "12px"
                        }
                    }, r.a.createElement(j.a, {
                        style: {
                            fontSize: "14px"
                        }
                    }, c + " " + this.props.field.Name))), r.a.createElement("td", null, r.a.createElement(f.a, {
                        container: !0
                    }, r.a.createElement(f.a, {
                        item: !0,
                        sm: 8
                    }, s), r.a.createElement(f.a, {
                        item: !0,
                        sm: 2
                    }, r.a.createElement(C.a, {
                        size: "small",
                        variant: "contained",
                        style: {
                            float: "right",
                            fontSize: "14px",
                            marginRight: "2%",
                            marginLeft: "2%"
                        },
                        onClick: this.toggleExpanded
                    }, " ", this.state.expandBtnLabel))))), r.a.createElement("tr", null, r.a.createElement("td", {
                        colSpan: "3"
                    }, r.a.createElement(P, {
                        show: this.state.showExpanded,
                        field: this.state.field,
                        value: this.state.fieldValue,
                        readOnly: this.props.readOnly,
                        isoMsg: this.props.isoMsg,
                        onClose: this.setNewValue
                    }))), o)
                }
            }]),
            a
        }(r.a.Component);
        z.MandatoryFields = ["Message Type", "MTI", "Bitmap"];
        var Z = t(238)
          , Y = function(e) {
            function a(e) {
                var t;
                return Object(i.a)(this, a),
                (t = Object(l.a)(this, Object(u.a)(a).call(this, e))).state = {
                    show: e.show,
                    selectedMsg: "",
                    errorMessage: null
                },
                t.closeDialogSuccess = t.closeDialogSuccess.bind(Object(d.a)(t)),
                t.closeDialogFail = t.closeDialogFail.bind(Object(d.a)(t)),
                t.selectedMsgChanged = t.selectedMsgChanged.bind(Object(d.a)(t)),
                t
            }
            return Object(h.a)(a, e),
            Object(s.a)(a, [{
                key: "selectedMsgChanged",
                value: function(e) {
                    this.setState({
                        selectedMsg: e.target.value
                    })
                }
            }, {
                key: "componentDidUpdate",
                value: function(e, a, t) {
                    var n = this;
                    !0 === this.props.show && !1 === a.show && m.a.get(A.loadMsgUrl, {
                        params: {
                            specId: this.props.specId,
                            msgId: this.props.msgId
                        }
                    }).then((function(e) {
                        n.setState({
                            savedMsgs: e.data.saved_messages,
                            selectedMsg: e.data.saved_messages[0],
                            show: !0,
                            errorMessage: null
                        })
                    }
                    )).catch((function(e) {
                        console.log(e.response.data),
                        console.log("whoops", e),
                        n.closeDialogFail("No saved messages/failed to retrieve saved messages")
                    }
                    ))
                }
            }, {
                key: "closeDialogSuccess",
                value: function() {
                    this.setState({
                        show: !1
                    }),
                    this.props.closeLoadMsgDialog(this.state.selectedMsg, null)
                }
            }, {
                key: "closeDialogFail",
                value: function(e) {
                    this.setState({
                        show: !1
                    }),
                    this.props.closeLoadMsgDialog(null, e)
                }
            }, {
                key: "render",
                value: function() {
                    var e, a = this;
                    return this.state.show && (e = this.state.errorMessage ? r.a.createElement("div", null, this.state.errorMessage) : r.a.createElement(r.a.Fragment, null, r.a.createElement(g.a, {
                        type: "text",
                        key: "msg_name_save",
                        margin: "dense",
                        fullWidth: !0,
                        select: !0,
                        variant: "outlined",
                        label: "Saved Message",
                        value: this.state.selectedMsg,
                        onChange: this.selectedMsgChanged
                    }, this.state.savedMsgs.map((function(e) {
                        return r.a.createElement(v.a, {
                            key: e,
                            value: e
                        }, e)
                    }
                    ))))),
                    r.a.createElement("div", null, r.a.createElement(I.a, {
                        open: this.state.show,
                        onClose: function() {
                            return a.closeDialogFail(null)
                        },
                        "aria-labelledby": "form-dialog-title",
                        fullWidth: !0,
                        maxWidth: "sm"
                    }, r.a.createElement(D.a, {
                        id: "form-dialog-title",
                        onClose: function() {
                            return a.closeDialogFail(null)
                        }
                    }, "Select Message"), r.a.createElement(N.a, null, r.a.createElement("div", null, r.a.createElement(f.a, {
                        container: !0,
                        spacing: 2
                    }, r.a.createElement(f.a, {
                        container: !0
                    }, r.a.createElement(f.a, {
                        item: !0,
                        lg: 12,
                        xl: 12
                    }, e))))), r.a.createElement(M.a, null, r.a.createElement(Z.a, {
                        onClick: this.closeDialogSuccess,
                        color: "primary"
                    }, "OK"), r.a.createElement(Z.a, {
                        onClick: function() {
                            return a.closeDialogFail(null)
                        },
                        color: "primary"
                    }, "Cancel"))))
                }
            }]),
            a
        }(r.a.Component)
          , X = t(170)
          , q = t(120)
          , J = t.n(q)
          , $ = function(e) {
            function a(e) {
                var t;
                return Object(i.a)(this, a),
                (t = Object(l.a)(this, Object(u.a)(a).call(this, e))).state = {
                    show: e.show
                },
                t.handleClose = t.handleClose.bind(Object(d.a)(t)),
                t
            }
            return Object(h.a)(a, e),
            Object(s.a)(a, [{
                key: "handleClose",
                value: function() {
                    this.setState({
                        show: !1
                    }),
                    this.props.onClose()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e, a, t) {
                    if (!0 === this.props.show && !1 === a.show) {
                        var n = "Testcase passed!";
                        null != this.props.results && this.props.results.length > 0 && (n = "Testcase failed!\n\n",
                        this.props.results.forEach((function(e) {
                            n += "\u26a0 " + e + "\n"
                        }
                        ))),
                        this.setState({
                            show: !0,
                            evalResult: n
                        })
                    }
                }
            }, {
                key: "render",
                value: function() {
                    return r.a.createElement(I.a, {
                        open: this.state.show,
                        fullWidth: !0,
                        maxWidth: "md",
                        onClose: this.handleClose,
                        disableBackdropClick: !0,
                        "aria-labelledby": "alert-dialog-title",
                        "aria-describedby": "alert-dialog-description"
                    }, r.a.createElement(D.a, {
                        id: "alert-dialog-title"
                    }, "Test Case Evaluation Result"), r.a.createElement(N.a, null, r.a.createElement(g.a, {
                        variant: "standard",
                        size: "medium",
                        contentEditable: "false",
                        multiline: !0,
                        rows: 10,
                        rowsMax: 20,
                        fullWidth: !0,
                        value: this.state.evalResult
                    })), r.a.createElement(M.a, null, r.a.createElement(C.a, {
                        onClick: this.handleClose,
                        color: "primary"
                    }, "OK")))
                }
            }]),
            a
        }(r.a.Component)
          , Q = function(e) {
            function a(e) {
                var t;
                return Object(i.a)(this, a),
                (t = Object(l.a)(this, Object(u.a)(a).call(this, e))).state = {
                    show: e.show,
                    data: t.props.data,
                    msgTemplate: t.props.msgTemplate,
                    evalResults: null,
                    showEvalResultsDialog: !1
                },
                t.hideResponseSegment = t.hideResponseSegment.bind(Object(d.a)(t)),
                t.copyToClipboard = t.copyToClipboard.bind(Object(d.a)(t)),
                t.evalTestCase = t.evalTestCase.bind(Object(d.a)(t)),
                t.showEvalResults = t.showEvalResults.bind(Object(d.a)(t)),
                t.textAreaRef = r.a.createRef(),
                t
            }
            return Object(h.a)(a, e),
            Object(s.a)(a, [{
                key: "evalTestCase",
                value: function() {
                    var e = this;
                    console.log("comparing ", this.props.data, " with ", this.props.testCase);
                    var a = [];
                    this.props.data.forEach((function(e) {
                        "Bitmap" == e.Name && e.Value
                    }
                    )),
                    this.props.data.forEach((function(t) {
                        e.props.testCase.resp_data.forEach((function(e) {
                            if (t.ID == e.ID) {
                                if ("Bitmap" === t.Name)
                                    for (var n = t.Value, r = e.Value, o = 0; o < r.length; o++)
                                        o < n.length ? r.charAt(o) != n.charAt(o) && ("1" == r.charAt(o) ? a.push('Field "'.concat(o + 1, '" is missing in response')) : a.push('Additional Field "'.concat(o + 1, '" is present in response'))) : "1" == r.charAt(o) && a.push('Field "'.concat(o + 1, '" is missing in response'));
                                switch (e.CompareOp) {
                                case "Exclude":
                                    break;
                                case "Equals":
                                    t.Value != e.Value && a.push("".concat(t.Name, " failed on ").concat(e.CompareOp, " condition. Expected: ").concat(e.Value, ", Actual: ").concat(t.Value));
                                    break;
                                case "StartsWith":
                                    t.Value.startsWith(e.Value) || a.push("".concat(t.Name, " failed on ").concat(e.CompareOp, " condition. Expected: ").concat(e.Value, ", Actual: ").concat(t.Value));
                                    break;
                                case "EndsWith":
                                    t.Value.endsWith(e.Value) || a.push("".concat(t.Name, " failed on ").concat(e.CompareOp, " condition. Expected: ").concat(e.Value, ", Actual: ").concat(t.Value));
                                    break;
                                default:
                                    a.push("".concat(e.Name, " uses a yet to supported compare-op - ").concat(e.CompareOp))
                                }
                            }
                        }
                        ))
                    }
                    )),
                    console.log("er: ", a),
                    this.setState({
                        evalResults: a,
                        showEvalResultsDialog: !0
                    })
                }
            }, {
                key: "appendFieldContent",
                value: function(e, a, t, n) {
                    return e.push(r.a.createElement(z, {
                        key: "response_seg_" + a.ID,
                        field: a,
                        id2Value: t,
                        readOnly: !0,
                        level: n,
                        onFieldUpdate: this.onFieldUpdate
                    })),
                    ""
                }
            }, {
                key: "hideResponseSegment",
                value: function() {
                    this.setState({
                        show: !1
                    }),
                    this.props.onClose()
                }
            }, {
                key: "collectData",
                value: function(e, a, t) {
                    var n = this;
                    if (a.get(e.ID)) {
                        var r = a.get(e.ID);
                        t.push("".concat(e.Name, ": ").concat(r))
                    }
                    e.Children.length > 0 && e.Children.forEach((function(e) {
                        n.collectData(e, a, t)
                    }
                    ))
                }
            }, {
                key: "componentDidUpdate",
                value: function(e, a, t) {
                    !1 === e.show && !0 === this.props.show && this.setState({
                        show: !0,
                        data: this.props.data,
                        msgTemplate: this.props.msgTemplate
                    })
                }
            }, {
                key: "copyToClipboard",
                value: function() {
                    this.textAreaRef.current.select(),
                    document.execCommand("copy") || alert("Failed to copy to clipboard!")
                }
            }, {
                key: "showEvalResults",
                value: function(e) {
                    this.setState({
                        showEvalResultsDialog: e
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , a = []
                      , t = [];
                    if (this.state.show) {
                        var n, o = new Map;
                        this.state.data.forEach((function(e) {
                            o.set(e.ID, e.Value)
                        }
                        )),
                        this.state.msgTemplate.fields.forEach((function(a) {
                            e.collectData(a, o, t)
                        }
                        ));
                        var c = "ISO Response  \n|---------------|\n" + t.reduce((function(e, a, t) {
                            return 1 === t ? e + "\n" + a + "\n" : e + a + "\n"
                        }
                        ));
                        return c = "ISO Request  \n|---------------|\n" + this.props.reqData + "\n\n" + c + "\n\n",
                        this.state.msgTemplate.fields.forEach((function(t) {
                            e.appendFieldContent(a, t, o, 0)
                        }
                        )),
                        r.a.createElement(r.a.Fragment, null, this.state.show ? r.a.createElement(I.a, {
                            open: this.state.show,
                            onClose: this.hideResponseSegment,
                            scroll: "paper",
                            PaperComponent: ee,
                            "aria-labelledby": "draggable-dialog-title",
                            maxWidth: "md",
                            fullWidth: !0,
                            disableBackdropClick: !0
                        }, r.a.createElement(D.a, {
                            style: {
                                cursor: "move"
                            },
                            id: "draggable-dialog-title"
                        }, this.props.dialogTitle), r.a.createElement(N.a, {
                            dividers: !0
                        }, r.a.createElement($, {
                            show: this.state.showEvalResultsDialog,
                            results: this.state.evalResults,
                            onClose: function() {
                                return e.showEvalResults(!1)
                            }
                        }), r.a.createElement(X.a, null, r.a.createElement("textarea", {
                            ref: this.textAreaRef,
                            style: {
                                opacity: "0.01",
                                position: "absolute",
                                zIndex: -9999,
                                height: 0
                            },
                            value: c
                        }), r.a.createElement("table", {
                            border: "0",
                            align: "center"
                        }, r.a.createElement("thead", null, r.a.createElement("tr", {
                            style: {
                                fontFamily: "lato-regular",
                                backgroundColor: "#eed143",
                                fontSize: "15px",
                                align: "center",
                                borderBottom: "solid",
                                borderColor: "blue"
                            }
                        }, r.a.createElement("td", {
                            colSpan: "3",
                            align: "center"
                        }, "Response Segment")), r.a.createElement("tr", {
                            style: {
                                fontFamily: "lato-regular",
                                backgroundColor: "#3effba",
                                fontSize: "14px"
                            }
                        }, r.a.createElement("td", {
                            align: "center"
                        }, "Selection"), r.a.createElement("td", {
                            align: "center",
                            style: {
                                width: "35%"
                            }
                        }, "Field"), r.a.createElement("td", {
                            align: "center",
                            style: {
                                width: "50%"
                            }
                        }, "Field Data"))), r.a.createElement("tbody", null, a)))), r.a.createElement(M.a, null, null != (null === (n = this.props.testCase) || void 0 === n ? void 0 : n.resp_data) ? r.a.createElement(C.a, {
                            onClick: this.evalTestCase,
                            size: "small",
                            color: "primary",
                            variant: "contained"
                        }, "Evaluate Test Case") : null, r.a.createElement(C.a, {
                            onClick: this.copyToClipboard,
                            size: "small",
                            color: "primary",
                            variant: "contained"
                        }, "Copy To Clipboard"), r.a.createElement(C.a, {
                            onClick: this.hideResponseSegment,
                            size: "small",
                            color: "primary",
                            variant: "contained"
                        }, "Close"))) : null)
                    }
                    return null
                }
            }]),
            a
        }(r.a.Component);
        function ee(e) {
            return r.a.createElement(J.a, {
                handle: "#draggable-dialog-title",
                cancel: '[class*="MuiDialogContent-root"]'
            }, r.a.createElement(X.a, e))
        }
        var ae = function(e) {
            function a(e) {
                var t;
                return Object(i.a)(this, a),
                (t = Object(l.a)(this, Object(u.a)(a).call(this, e))).state = {
                    show: e.show,
                    traceMsg: "",
                    errorMessage: null
                },
                t.closeDialogSuccess = t.closeDialogSuccess.bind(Object(d.a)(t)),
                t.closeDialogFail = t.closeDialogFail.bind(Object(d.a)(t)),
                t.traceChanged = t.traceChanged.bind(Object(d.a)(t)),
                t.isValidTrace = t.isValidTrace.bind(Object(d.a)(t)),
                t
            }
            return Object(h.a)(a, e),
            Object(s.a)(a, [{
                key: "isValidTrace",
                value: function(e) {
                    return !("" === e.trim() || e.length % 2 !== 0 || !e.match("^[0-9,a-f,A-F]+$"))
                }
            }, {
                key: "traceChanged",
                value: function(e) {
                    var a = e.target.value;
                    this.isValidTrace(a) ? this.setState({
                        traceMsg: a,
                        errorMessage: null
                    }) : this.setState({
                        traceMsg: a,
                        errorMessage: "Input is not valid hex"
                    })
                }
            }, {
                key: "componentDidUpdate",
                value: function(e, a, t) {
                    !0 === this.props.show && !1 === a.show && this.setState({
                        show: !0,
                        traceMsg: ""
                    })
                }
            }, {
                key: "closeDialogSuccess",
                value: function() {
                    this.isValidTrace(this.state.traceMsg) && (this.setState({
                        show: !1
                    }),
                    this.props.setTrace(this.state.traceMsg))
                }
            }, {
                key: "closeDialogFail",
                value: function() {
                    this.setState({
                        show: !1
                    }),
                    this.props.setTrace(null)
                }
            }, {
                key: "render",
                value: function() {
                    return r.a.createElement("div", null, r.a.createElement(I.a, {
                        open: this.state.show,
                        onClose: this.closeDialogFail,
                        "aria-labelledby": "form-dialog-title",
                        fullWidth: !0,
                        maxWidth: "md"
                    }, r.a.createElement(D.a, {
                        id: "form-dialog-title",
                        onClose: this.closeDialogFail
                    }, "Parse Trace"), r.a.createElement(N.a, null, r.a.createElement("div", null, r.a.createElement(f.a, {
                        container: !0,
                        spacing: 2
                    }, r.a.createElement(f.a, {
                        container: !0
                    }, r.a.createElement(f.a, {
                        item: !0,
                        lg: 12,
                        xl: 12
                    }, r.a.createElement(g.a, {
                        key: "trace_input",
                        variant: "outlined",
                        label: "Hex Trace",
                        margin: "dense",
                        fullWidth: !0,
                        value: this.state.traceMsg,
                        error: null !== this.state.errorMessage,
                        onChange: this.traceChanged,
                        rows: 10,
                        helperText: this.state.errorMessage,
                        multiline: !0
                    })))))), r.a.createElement(M.a, null, r.a.createElement(Z.a, {
                        onClick: this.closeDialogSuccess,
                        color: "primary"
                    }, "OK"), r.a.createElement(Z.a, {
                        onClick: this.closeDialogFail,
                        color: "primary"
                    }, "Cancel"))))
                }
            }]),
            a
        }(r.a.Component)
          , te = t(219)
          , ne = function(e) {
            function a(e) {
                var t;
                return Object(i.a)(this, a),
                (t = Object(l.a)(this, Object(u.a)(a).call(this, e))).state = {
                    show: e.show,
                    errorMsg: null
                },
                t.handleClose = t.handleClose.bind(Object(d.a)(t)),
                t.handleCancel = t.handleCancel.bind(Object(d.a)(t)),
                t
            }
            return Object(h.a)(a, e),
            Object(s.a)(a, [{
                key: "handleClose",
                value: function() {
                    var e = this;
                    if (null != this.props.msgName && "" != this.props.msgName) {
                        var a = "&response_msg=" + JSON.stringify(this.props.responseData)
                          , t = "specId=".concat(this.props.specId, "&msgId=").concat(this.props.msgId, "&dsName=").concat(this.props.msgName, "&updateMsg=true").concat(a);
                        m.a.post(A.saveMsgUrl, t).then((function(a) {
                            console.log(a),
                            e.props.onClose()
                        }
                        )).catch((function(a) {
                            var t, n;
                            console.log(a),
                            e.setState({
                                errorMsg: " Failed to save TC conditions. - " + (null === a || void 0 === a || null === (t = a.response) || void 0 === t || null === (n = t.data) || void 0 === n ? void 0 : n.error)
                            })
                        }
                        ))
                    } else
                        this.setState({
                            show: !1
                        }),
                        this.props.onClose()
                }
            }, {
                key: "handleCancel",
                value: function() {
                    this.setState({
                        show: !1
                    }),
                    this.props.onCancel()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e, a, t) {
                    !0 === this.props.show && !1 === a.show ? this.setState({
                        show: !0
                    }) : !1 === this.props.show && !0 === a.show && this.setState({
                        show: !1
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , a = [];
                    return this.state.show && this.props.responseData.forEach((function(e) {
                        a.push(r.a.createElement(re, {
                            key: "topt_" + e.ID,
                            field: e
                        }))
                    }
                    )),
                    r.a.createElement(I.a, {
                        open: this.state.show,
                        fullWidth: !0,
                        maxWidth: "md",
                        onClose: this.handleClose,
                        "aria-labelledby": "alert-dialog-title",
                        "aria-describedby": "alert-dialog-description"
                    }, r.a.createElement(D.a, {
                        id: "alert-dialog-title"
                    }, "Test Case Config"), r.a.createElement(N.a, null, r.a.createElement("div", {
                        style: {
                            width: "100%"
                        }
                    }, a)), r.a.createElement(T, {
                        show: null != this.state.errorMsg,
                        msg: this.state.errorMsg,
                        onClose: function() {
                            e.setState({
                                errorMsg: null
                            })
                        }
                    }), r.a.createElement(M.a, null, r.a.createElement(C.a, {
                        onClick: this.handleClose,
                        color: "primary",
                        variant: "contained"
                    }, "OK/Save"), r.a.createElement(C.a, {
                        onClick: this.handleCancel,
                        color: "secondary",
                        variant: "contained"
                    }, "Cancel")))
                }
            }]),
            a
        }(r.a.Component);
        function re(e) {
            var a = Object(n.useState)("Equals")
              , t = Object(E.a)(a, 2)
              , o = t[0]
              , c = t[1];
            Object(n.useEffect)((function() {
                void 0 == e.field.CompareOp || null == e.field.CompareOp ? e.field.CompareOp = "Equals" : c(e.field.CompareOp)
            }
            ), []);
            return r.a.createElement(r.a.Fragment, null, r.a.createElement(f.a, {
                container: !0,
                style: {
                    width: "100%"
                },
                spacing: "1"
            }, r.a.createElement(f.a, {
                item: !0,
                sm: 2
            }, e.field.Name), r.a.createElement(f.a, {
                item: !0,
                sm: 2
            }, r.a.createElement(g.a, {
                value: o,
                onChange: function(a) {
                    e.field.CompareOp = a.target.value,
                    c(a.target.value)
                },
                variant: "outlined",
                size: "small",
                margin: "dense",
                label: "Operator",
                select: !0
            }, r.a.createElement(v.a, {
                value: "Equals"
            }, "Equals"), r.a.createElement(v.a, {
                value: "Exclude"
            }, "Exclude"), r.a.createElement(v.a, {
                value: "Present"
            }, "Present"), r.a.createElement(v.a, {
                value: "Absent"
            }, "Absent"), r.a.createElement(v.a, {
                value: "StartsWith"
            }, "StartsWith"), r.a.createElement(v.a, {
                value: "EndsWith"
            }, "EndsWith"))), r.a.createElement(f.a, {
                item: !0,
                sm: 6
            }, r.a.createElement(g.a, {
                defaultValue: e.field.Value,
                variant: "standard"
            }))))
        }
        var oe = function(e) {
            function a(e) {
                var t;
                Object(i.a)(this, a);
                var n = !1;
                return null != (t = Object(l.a)(this, Object(u.a)(a).call(this, e))).props.responseData && (n = !0),
                t.state = {
                    show: e.show,
                    msgName: e.initialMessage,
                    updateIfExists: !1,
                    includeResponse: n,
                    showTCEditDialog: !1
                },
                t.closeDialogSuccess = t.closeDialogSuccess.bind(Object(d.a)(t)),
                t.closeDialogFail = t.closeDialogFail.bind(Object(d.a)(t)),
                t.msgNameChanged = t.msgNameChanged.bind(Object(d.a)(t)),
                t.updateIfExistsChanged = t.updateIfExistsChanged.bind(Object(d.a)(t)),
                t.updateIncludeResponseChanged = t.updateIncludeResponseChanged.bind(Object(d.a)(t)),
                t.showTCEditDialog = t.showTCEditDialog.bind(Object(d.a)(t)),
                t
            }
            return Object(h.a)(a, e),
            Object(s.a)(a, [{
                key: "msgNameChanged",
                value: function(e) {
                    this.setState({
                        errorMessage: "",
                        msgName: e.target.value
                    })
                }
            }, {
                key: "componentDidUpdate",
                value: function(e, a, t) {
                    !0 === this.props.show && !1 === a.show && this.setState({
                        show: !0,
                        msgName: this.props.msgName
                    })
                }
            }, {
                key: "closeDialogSuccess",
                value: function() {
                    var e = this;
                    if (this.state.msgName && "" !== this.state.msgName && this.props.data) {
                        var a = "";
                        this.state.includeResponse && (a = "&response_msg=" + JSON.stringify(this.props.responseData));
                        var t = "specId=".concat(this.props.specId, "&msgId=").concat(this.props.msgId, "&dsName=").concat(this.state.msgName, "&updateMsg=").concat(this.state.updateIfExists, "&msg=").concat(JSON.stringify(this.props.data)).concat(a);
                        m.a.post(A.saveMsgUrl, t).then((function(a) {
                            console.log(a),
                            e.props.msgSaveSuccess(e.state.msgName, e.state.updateIfExists),
                            e.setState({
                                show: !1
                            })
                        }
                        )).catch((function(a) {
                            e.props.msgSaveFailed(a),
                            e.setState({
                                show: !1
                            })
                        }
                        ))
                    } else
                        this.setState({
                            errorMessage: "Please specify a message!"
                        })
                }
            }, {
                key: "closeDialogFail",
                value: function() {
                    this.props.msgSaveCancelled(),
                    this.setState({
                        show: !1
                    })
                }
            }, {
                key: "updateIfExistsChanged",
                value: function(e) {
                    this.setState({
                        updateIfExists: e.target.checked
                    })
                }
            }, {
                key: "updateIncludeResponseChanged",
                value: function(e) {
                    this.setState({
                        includeResponse: e.target.checked
                    })
                }
            }, {
                key: "showTCEditDialog",
                value: function(e) {
                    this.setState({
                        showTCEditDialog: e
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , a = null;
                    return null != this.props.responseData && (a = r.a.createElement(f.a, {
                        item: !0,
                        xs: 4
                    }, r.a.createElement(te.a, {
                        control: r.a.createElement(B.a, {
                            key: "cb_include_respdata",
                            size: "sm",
                            checked: this.state.includeResponse,
                            onChange: this.updateIncludeResponseChanged
                        }),
                        label: "Include Response Data (Test Case)"
                    }))),
                    r.a.createElement("div", null, r.a.createElement(I.a, {
                        open: this.state.show,
                        onClose: this.closeDialogFail,
                        "aria-labelledby": "form-dialog-title",
                        fullWidth: !0,
                        maxWidth: "sm"
                    }, r.a.createElement(D.a, {
                        id: "form-dialog-title",
                        onClose: this.closeDialogFail
                    }, "Save Message"), r.a.createElement(N.a, null, r.a.createElement(ne, {
                        responseData: this.props.responseData,
                        show: this.state.showTCEditDialog,
                        onClose: function() {
                            return e.showTCEditDialog(!1)
                        },
                        onCancel: function() {
                            return e.showTCEditDialog(!1)
                        }
                    }), r.a.createElement("div", null, r.a.createElement(f.a, {
                        container: !0,
                        spacing: 2
                    }, r.a.createElement(f.a, {
                        container: !0
                    }, r.a.createElement(f.a, {
                        item: !0,
                        lg: 12,
                        xl: 12
                    }, r.a.createElement(g.a, {
                        type: "text",
                        key: "msg_name_save",
                        margin: "dense",
                        fullWidth: !0,
                        variant: "outlined",
                        label: "Message Name",
                        value: this.state.msgName,
                        onChange: this.msgNameChanged
                    }))), r.a.createElement(f.a, {
                        container: !0
                    }, r.a.createElement(f.a, {
                        item: !0,
                        xs: 4
                    }, r.a.createElement(te.a, {
                        control: r.a.createElement(B.a, {
                            key: "key_update_if_exists",
                            size: "small",
                            checked: this.state.updateIfExists,
                            onChange: this.updateIfExistsChanged
                        }),
                        label: "Overwrite"
                    })), a)))), r.a.createElement(M.a, null, this.state.includeResponse ? r.a.createElement(Z.a, {
                        onClick: function() {
                            return e.showTCEditDialog(!0)
                        },
                        color: "primary"
                    }, "Edit TC Conditions") : null, r.a.createElement(Z.a, {
                        onClick: this.closeDialogSuccess,
                        color: "primary"
                    }, "OK"), r.a.createElement(Z.a, {
                        onClick: this.closeDialogFail,
                        color: "primary"
                    }, "Cancel"))))
                }
            }]),
            a
        }(r.a.Component)
          , ce = (t(166),
        function(e) {
            function a(e) {
                var t;
                return Object(i.a)(this, a),
                (t = Object(l.a)(this, Object(u.a)(a).call(this, e))).state = {
                    targetServerIp: e.serverIP,
                    targetServerPort: e.port,
                    mliType: e.mliType
                },
                t.serverIpChanged = t.serverIpChanged.bind(Object(d.a)(t)),
                t.serverPortChanged = t.serverPortChanged.bind(Object(d.a)(t)),
                t.mliTypeChanged = t.mliTypeChanged.bind(Object(d.a)(t)),
                t
            }
            return Object(h.a)(a, e),
            Object(s.a)(a, [{
                key: "mliTypeChanged",
                value: function(e) {
                    this.setState({
                        mliType: e.target.value
                    }),
                    this.props.onChange(this.state.targetServerIp, this.state.targetServerPort, e.target.value)
                }
            }, {
                key: "serverIpChanged",
                value: function(e) {
                    this.setState({
                        targetServerIp: e.target.value
                    }),
                    this.props.onChange(e.target.value, this.state.targetServerPort, this.state.mliType)
                }
            }, {
                key: "serverPortChanged",
                value: function(e) {
                    this.setState({
                        targetServerPort: e.target.value
                    }),
                    this.props.onChange(this.state.targetServerIp, e.target.value, this.state.mliType)
                }
            }, {
                key: "render",
                value: function() {
                    return r.a.createElement(b.a, {
                        border: 1,
                        borderColor: "#1228B6",
                        borderRadius: 8,
                        style: {
                            backgroundColor: "#E5E4E3",
                            marginBottom: "1%"
                        }
                    }, r.a.createElement("div", {
                        style: {
                            textAlign: "left",
                            verticalAlign: "baseline",
                            marginBottom: "2%",
                            marginTop: "2%",
                            width: "100%"
                        }
                    }, r.a.createElement(f.a, {
                        container: !0,
                        spacing: 3,
                        justify: "space-around"
                    }, r.a.createElement(f.a, {
                        item: !0,
                        lg: 6
                    }, r.a.createElement(g.a, {
                        id: "ns_ip",
                        label: "Host IP/Name",
                        size: "small",
                        fullWidth: !0,
                        variant: "outlined",
                        value: this.state.targetServerIp,
                        onChange: this.serverIpChanged
                    })), r.a.createElement(f.a, {
                        item: !0,
                        lg: 4
                    }, r.a.createElement(g.a, {
                        id: "ns_port",
                        label: "Port",
                        size: "small",
                        fullWidth: !0,
                        variant: "outlined",
                        value: this.state.targetServerPort,
                        onChange: this.serverPortChanged
                    })), r.a.createElement(f.a, {
                        item: !0,
                        log: 4
                    }, r.a.createElement(g.a, {
                        select: !0,
                        size: "small",
                        fullWidth: !0,
                        value: this.state.mliType,
                        variant: "outlined",
                        label: "MLI",
                        onChange: this.mliTypeChanged
                    }, r.a.createElement(v.a, {
                        value: "2i"
                    }, "2I"), r.a.createElement(v.a, {
                        value: "2e"
                    }, "2E"), r.a.createElement(v.a, {
                        value: "4i"
                    }, "4I"), r.a.createElement(v.a, {
                        value: "4e"
                    }, "4E"), r.a.createElement(v.a, {
                        value: "4ai"
                    }, "4AI"), r.a.createElement(v.a, {
                        value: "4ae"
                    }, "4AE"))))))
                }
            }]),
            a
        }(r.a.Component))
          , ie = t(224)
          , se = function(e) {
            function a(e) {
                var t;
                return Object(i.a)(this, a),
                t = Object(l.a)(this, Object(u.a)(a).call(this, e)),
                console.log("New MsgHist"),
                t.state = {
                    maxItems: e.initialMaxItems,
                    logData: e.initialLogData
                },
                t.maxItemsChanged = t.maxItemsChanged.bind(Object(d.a)(t)),
                t.fetchLogs = t.fetchLogs.bind(Object(d.a)(t)),
                t
            }
            return Object(h.a)(a, e),
            Object(s.a)(a, [{
                key: "maxItemsChanged",
                value: function(e) {
                    this.setState({
                        maxItems: e.target.value
                    })
                }
            }, {
                key: "fetchLogs",
                value: function() {
                    var e = this;
                    m.a.get(A.logHistUrl + "?spec_id=".concat(this.props.specId, "&msg_id=").concat(this.props.msgId, "&count=").concat(this.state.maxItems)).then((function(a) {
                        console.log(a.data);
                        var t = "";
                        a.data.forEach((function(e) {
                            t += e + "\n-----------------------------\n"
                        }
                        )),
                        e.setState({
                            logData: t
                        }),
                        e.props.saveState({
                            maxItems: e.state.maxItems,
                            logData: e.state.logData
                        })
                    }
                    )).catch((function(e) {
                        console.log(e)
                    }
                    ))
                }
            }, {
                key: "render",
                value: function() {
                    return n.createElement("div", {
                        style: {
                            textAlign: "left",
                            marginTop: "5%"
                        }
                    }, n.createElement(f.a, {
                        container: !0,
                        spacing: 5,
                        alignItems: "center"
                    }, n.createElement(f.a, {
                        item: !0,
                        lg: 4
                    }, n.createElement(g.a, {
                        key: "isim-hist-max-items",
                        variant: "outlined",
                        margin: "dense",
                        label: "Last 'X' Messages",
                        fullWidth: !0,
                        value: this.state.maxItems,
                        select: !0,
                        onChange: this.maxItemsChanged
                    }, n.createElement(v.a, {
                        value: 5
                    }, "5"), n.createElement(v.a, {
                        value: 10
                    }, "10"), n.createElement(v.a, {
                        value: 25
                    }, "25"), n.createElement(v.a, {
                        value: 50
                    }, "50"))), n.createElement(f.a, {
                        item: !0,
                        lg: 4
                    }, n.createElement(C.a, {
                        variant: "contained",
                        color: "primary",
                        size: "small",
                        onClick: this.fetchLogs
                    }, "Fetch"))), n.createElement("div", {
                        style: {
                            width: "80%"
                        }
                    }, n.createElement(g.a, {
                        key: "isim-hist-logs",
                        margin: "dense",
                        label: "Messages",
                        fullWidth: !0,
                        multiline: !0,
                        rowsMax: 100,
                        contentEditable: !1,
                        value: this.state.logData
                    })))
                }
            }]),
            a
        }(n.Component)
          , le = t(222)
          , ue = t(234)
          , de = t(223)
          , he = t(242)
          , pe = t(220)
          , me = t(92)
          , ye = t(221)
          , ge = t(70)
          , Ce = t.n(ge)
          , Ee = function(e) {
            function a(e) {
                var t;
                Object(i.a)(this, a),
                t = Object(l.a)(this, Object(u.a)(a).call(this, e));
                var n = Array(192);
                n.fill("0");
                var r = "";
                return n.forEach((function(e) {
                    r += e
                }
                )),
                t.state = {
                    pos: n,
                    bitmapstr: t.toHexString(r)
                },
                t.toHexString = t.toHexString.bind(Object(d.a)(t)),
                t.isSet = t.isSet.bind(Object(d.a)(t)),
                t.bitChanged = t.bitChanged.bind(Object(d.a)(t)),
                t.bitmapChanged = t.bitmapChanged.bind(Object(d.a)(t)),
                t
            }
            return Object(h.a)(a, e),
            Object(s.a)(a, [{
                key: "bitmapChanged",
                value: function(e) {
                    var t = e.target.value
                      , n = 192 - (t = (t = t.replace(":", "")).replace(":", "")).length;
                    if (n < 0)
                        this.setState({
                            errMsg: "bitmap value cannot exceed 192 bits!"
                        });
                    else if (t.match("^[0-9,a-f,A-F]+$")) {
                        for (var r = 0; r < n; r++)
                            t += "0";
                        for (var o = Array(192), c = 0, i = 0; c < t.length; c++)
                            for (var s = a.toBinary(t.substr(c, 1)), l = 0; l < 4; l++,
                            i++)
                                o[i] = s[l];
                        var u = "";
                        o.forEach((function(e) {
                            u += e
                        }
                        )),
                        this.setState({
                            pos: o,
                            bitmapstr: this.toHexString(u),
                            errMsg: null
                        })
                    } else
                        this.setState({
                            errMsg: "bitmap value can only contains hex characters"
                        })
                }
            }, {
                key: "isSet",
                value: function(e) {
                    return "1" === this.state.pos[e]
                }
            }, {
                key: "toHexString",
                value: function(e) {
                    for (var t = "", n = 0; n < e.length; n += 8) {
                        var r = e.substr(n, 4)
                          , o = e.substr(n + 4, 4);
                        t += a.toHex(r) + a.toHex(o)
                    }
                    return t.substr(0, 16) + ":" + t.substr(16, 16) + ":" + t.substr(32, 16)
                }
            }, {
                key: "bitChanged",
                value: function(e, a) {
                    var t = this.state.pos;
                    e.target.checked ? t[a] = "1" : t[a] = "0",
                    t[0] = "0",
                    t[64] = "0";
                    for (var n = 0; n < 192; n++)
                        if ("1" == t[n]) {
                            var r = n + 1;
                            r > 64 && r < 129 && (t[0] = "1"),
                            r > 128 && (t[64] = "1")
                        }
                    var o = "";
                    this.state.pos.forEach((function(e) {
                        o += e
                    }
                    )),
                    this.setState({
                        bitmapstr: this.toHexString(o),
                        pos: t
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , a = []
                      , t = [];
                    a.push(n.createElement(g.a, {
                        key: "bmp_str",
                        value: this.state.bitmapstr,
                        fullWidth: !0,
                        variant: "outlined",
                        onChange: this.bitmapChanged,
                        error: null != this.state.errMsg,
                        helperText: this.state.errMsg,
                        label: "Value"
                    }));
                    for (var r = [], o = function(o) {
                        r.push(n.createElement(f.a, {
                            item: !0,
                            sm: 1,
                            alignItems: "spaced-evenly"
                        }, n.createElement(te.a, {
                            label: o + 1,
                            key: "lb_" + (o + 1),
                            control: n.createElement(B.a, {
                                key: "cb_" + o,
                                checked: "1" === e.state.pos[o],
                                onChange: function(a) {
                                    return e.bitChanged(a, o)
                                }
                            })
                        }))),
                        o + 1 >= 8 && (o + 1) % 8 === 0 && (t.push(n.createElement(f.a, {
                            container: !0,
                            justify: "space-evenly"
                        }, r)),
                        r = []),
                        o + 1 >= 64 && (o + 1) % 64 === 0 && (a.push(n.createElement(b.a, {
                            style: {
                                marginTop: "2%",
                                marginBottom: "2%"
                            },
                            border: 1,
                            borderColor: "primary.main",
                            borderRadius: 4
                        }, n.createElement(f.a, {
                            container: !0,
                            justify: "space-evenly"
                        }, t))),
                        t = [])
                    }, c = 0; c < 192; c++)
                        o(c);
                    return n.createElement("div", {
                        style: {
                            width: "100%"
                        }
                    }, a)
                }
            }], [{
                key: "toBinary",
                value: function(e) {
                    var a = "";
                    switch (e) {
                    case "0":
                        a = "0000";
                        break;
                    case "1":
                        a = "0001";
                        break;
                    case "2":
                        a = "0010";
                        break;
                    case "3":
                        a = "0011";
                        break;
                    case "4":
                        a = "0100";
                        break;
                    case "5":
                        a = "0101";
                        break;
                    case "6":
                        a = "0110";
                        break;
                    case "7":
                        a = "0111";
                        break;
                    case "8":
                        a = "1000";
                        break;
                    case "9":
                        a = "1001";
                        break;
                    case "A":
                        a = "1010";
                        break;
                    case "B":
                        a = "1011";
                        break;
                    case "C":
                        a = "1100";
                        break;
                    case "D":
                        a = "1101";
                        break;
                    case "E":
                        a = "1110";
                        break;
                    case "F":
                        a = "1111"
                    }
                    return a
                }
            }, {
                key: "toHex",
                value: function(e) {
                    var a = "";
                    switch (e) {
                    case "0000":
                        a = "0";
                        break;
                    case "0001":
                        a = "1";
                        break;
                    case "0010":
                        a = "2";
                        break;
                    case "0011":
                        a = "3";
                        break;
                    case "0100":
                        a = "4";
                        break;
                    case "0101":
                        a = "5";
                        break;
                    case "0110":
                        a = "6";
                        break;
                    case "0111":
                        a = "7";
                        break;
                    case "1000":
                        a = "8";
                        break;
                    case "1001":
                        a = "9";
                        break;
                    case "1010":
                        a = "A";
                        break;
                    case "1011":
                        a = "B";
                        break;
                    case "1100":
                        a = "C";
                        break;
                    case "1101":
                        a = "D";
                        break;
                    case "1110":
                        a = "E";
                        break;
                    case "1111":
                        a = "F"
                    }
                    return a
                }
            }]),
            a
        }(n.Component)
          , fe = function(e) {
            function a(e) {
                var t;
                return Object(i.a)(this, a),
                (t = Object(l.a)(this, Object(u.a)(a).call(this, e))).pinField = {
                    PinGenProps: {
                        PANFieldId: 0,
                        PANExtractParams: "",
                        PINFormat: "ISO0",
                        PINClear: "1234",
                        PINKey: "1234567890abcd0102030546febce4ee"
                    },
                    GenType: "pin_gen"
                },
                t.macField = {
                    MacGenProps: {
                        MacAlgo: "ANSIX9_19",
                        MacKey: "1234567890abcd0102030546febce4ee"
                    },
                    GenType: "mac_gen"
                },
                t.state = {
                    pinBlock: "",
                    mac: "",
                    macData: "",
                    error: ""
                },
                t.setPinValue = t.setPinValue.bind(Object(d.a)(t)),
                t.setMacValue = t.setMacValue.bind(Object(d.a)(t)),
                t.macDataChanged = t.macDataChanged.bind(Object(d.a)(t)),
                t
            }
            return Object(h.a)(a, e),
            Object(s.a)(a, [{
                key: "setPinValue",
                value: function(e) {
                    this.setState({
                        pinBlock: e
                    })
                }
            }, {
                key: "setMacValue",
                value: function(e) {
                    this.setState({
                        mac: e
                    })
                }
            }, {
                key: "macDataChanged",
                value: function(e) {
                    0 !== e.target.value.trim().length && e.target.value.trim().length % 2 === 0 ? this.setState({
                        error: "",
                        macData: e.target.value.trim()
                    }) : this.setState({
                        error: "MacData should be hex/even-digits",
                        macData: e.target.value
                    })
                }
            }, {
                key: "render",
                value: function() {
                    return n.createElement("div", {
                        style: {
                            textAlign: "left",
                            marginTop: "5%"
                        }
                    }, n.createElement(f.a, {
                        container: !0,
                        spacing: 1,
                        direction: "column"
                    }, n.createElement(f.a, {
                        item: !0,
                        sm: 6,
                        justify: "center"
                    }, n.createElement(he.a, null, n.createElement(pe.a, {
                        expandIcon: n.createElement(Ce.a, null),
                        "aria-controls": "panel1a-content",
                        id: "panel1a-header"
                    }, n.createElement(me.a, null, "PIN Generator")), n.createElement(ye.a, null, n.createElement("div", {
                        style: {
                            textAlign: "left",
                            marginTop: "5%",
                            width: "100%",
                            height: "100%"
                        }
                    }, n.createElement(R, {
                        field: this.pinField,
                        setPinBlock: this.setPinValue
                    }), n.createElement(g.a, {
                        size: "small",
                        label: "PIN Block",
                        variant: "outlined",
                        margin: "dense",
                        fullWidth: !0,
                        value: this.state.pinBlock
                    }))))), n.createElement(f.a, {
                        item: !0,
                        sm: 6
                    }, n.createElement(he.a, null, n.createElement(pe.a, {
                        expandIcon: n.createElement(Ce.a, null),
                        "aria-controls": "panel2a-content",
                        id: "panel2a-header"
                    }, n.createElement(me.a, null, "MAC Generator")), n.createElement(ye.a, null, n.createElement("div", {
                        style: {
                            textAlign: "left",
                            marginTop: "5%",
                            width: "100%"
                        }
                    }, n.createElement(g.a, {
                        size: "small",
                        label: "Mac Data",
                        variant: "outlined",
                        margin: "dense",
                        fullWidth: !0,
                        multiline: !0,
                        onChange: this.macDataChanged,
                        rows: 5,
                        rowsMax: 20,
                        error: "" !== this.state.error,
                        helperText: this.state.error,
                        value: this.state.macData
                    }), n.createElement(w, {
                        field: this.macField,
                        setMac: this.setMacValue,
                        macData: this.state.macData
                    }), n.createElement(g.a, {
                        size: "small",
                        label: "MAC",
                        variant: "outlined",
                        margin: "dense",
                        fullWidth: !0,
                        value: this.state.mac
                    }))))), n.createElement(f.a, {
                        item: !0,
                        sm: 6
                    }, n.createElement(he.a, null, n.createElement(pe.a, {
                        expandIcon: n.createElement(Ce.a, null),
                        "aria-controls": "panel3a-content",
                        id: "panel3a-header"
                    }, n.createElement(me.a, null, "ISO Bitmap Codec")), n.createElement(ye.a, null, n.createElement("div", {
                        style: {
                            textAlign: "left",
                            marginTop: "5%",
                            width: "100%"
                        }
                    }, n.createElement(Ee, null)))))))
                }
            }]),
            a
        }(n.Component)
          , ve = function(e) {
            function a(e) {
                var t;
                return Object(i.a)(this, a),
                (t = Object(l.a)(this, Object(u.a)(a).call(this, e))).state = {
                    msgTemplate: null,
                    loaded: !1,
                    spec: e.spec,
                    msg: e.msg,
                    shouldShow: e.showMsgTemplate,
                    targetServerIp: "127.0.0.1",
                    targetServerPort: "9001",
                    mliType: "4ae",
                    currentDataSet: "",
                    errDialogVisible: !1,
                    errorMessage: "",
                    showLoadMessagesDialog: !1,
                    showTraceInputDialog: !1,
                    showSaveMsgDialog: !1,
                    showResponse: !1,
                    responseData: null,
                    reqMenuVisible: !1,
                    selectedReqMenuItem: null,
                    testCase: null,
                    reqClipboardData: null,
                    selectedTab: 0,
                    showEditTCDialog: !1,
                    msgHist: {
                        maxItems: 5,
                        logData: ""
                    }
                },
                t.onFieldUpdate = t.onFieldUpdate.bind(Object(d.a)(t)),
                t.appendFieldContent = t.appendFieldContent.bind(Object(d.a)(t)),
                t.sendToHost = t.sendToHost.bind(Object(d.a)(t)),
                t.showErrorDialog = t.showErrorDialog.bind(Object(d.a)(t)),
                t.closeErrorDialog = t.closeErrorDialog.bind(Object(d.a)(t)),
                t.processError = t.processError.bind(Object(d.a)(t)),
                t.showLoadMessagesDialog = t.showLoadMessagesDialog.bind(Object(d.a)(t)),
                t.closeLoadMsgDialog = t.closeLoadMsgDialog.bind(Object(d.a)(t)),
                t.showUnImplementedError = t.showUnImplementedError.bind(Object(d.a)(t)),
                t.setTrace = t.setTrace.bind(Object(d.a)(t)),
                t.showTraceInputsDialog = t.showTraceInputsDialog.bind(Object(d.a)(t)),
                t.showSaveMsgDialog = t.showSaveMsgDialog.bind(Object(d.a)(t)),
                t.msgSaveSuccess = t.msgSaveSuccess.bind(Object(d.a)(t)),
                t.msgSaveFailed = t.msgSaveFailed.bind(Object(d.a)(t)),
                t.msgSaveCancelled = t.msgSaveCancelled.bind(Object(d.a)(t)),
                t.showInfoDialog = t.showInfoDialog.bind(Object(d.a)(t)),
                t.showMenu = t.showMenu.bind(Object(d.a)(t)),
                t.hideMenu = t.hideMenu.bind(Object(d.a)(t)),
                t.handleMenuClick = t.handleMenuClick.bind(Object(d.a)(t)),
                t.showResponseDialog = t.showResponseDialog.bind(Object(d.a)(t)),
                t.getTemplateLabel = t.getTemplateLabel.bind(Object(d.a)(t)),
                t.networkSettingsChanged = t.networkSettingsChanged.bind(Object(d.a)(t)),
                t.hideResponse = t.hideResponse.bind(Object(d.a)(t)),
                t.tabChanged = t.tabChanged.bind(Object(d.a)(t)),
                t.saveHistState = t.saveHistState.bind(Object(d.a)(t)),
                t.setStateAndPushUp = t.setStateAndPushUp.bind(Object(d.a)(t)),
                t.showEditTCDialog = t.showEditTCDialog.bind(Object(d.a)(t)),
                t
            }
            return Object(h.a)(a, e),
            Object(s.a)(a, [{
                key: "setStateAndPushUp",
                value: function(e) {
                    this.setState(e)
                }
            }, {
                key: "saveHistState",
                value: function(e) {
                    console.log("Received ", e),
                    this.setStateAndPushUp({
                        msgHist: e
                    })
                }
            }, {
                key: "tabChanged",
                value: function(e, a) {
                    this.setStateAndPushUp({
                        selectedTab: a
                    })
                }
            }, {
                key: "networkSettingsChanged",
                value: function(e, a, t) {
                    this.setStateAndPushUp({
                        targetServerIp: e,
                        targetServerPort: a,
                        mliType: t
                    })
                }
            }, {
                key: "showMenu",
                value: function(e) {
                    this.setStateAndPushUp({
                        selectedReqMenuItem: e.currentTarget,
                        reqMenuVisible: !0
                    })
                }
            }, {
                key: "hideMenu",
                value: function() {
                    this.setStateAndPushUp({
                        reqMenuVisible: !1
                    }),
                    this.setStateAndPushUp({
                        selectedReqMenuItem: null
                    })
                }
            }, {
                key: "showEditTCDialog",
                value: function(e) {
                    this.setState({
                        showEditTCDialog: e
                    })
                }
            }, {
                key: "showResponseDialog",
                value: function() {
                    this.hideMenu(),
                    this.setStateAndPushUp({
                        showResponse: !0
                    })
                }
            }, {
                key: "hideResponse",
                value: function() {
                    this.setStateAndPushUp({
                        showResponse: !1
                    })
                }
            }, {
                key: "handleMenuClick",
                value: function(e) {
                    alert(e.currentTarget),
                    this.setStateAndPushUp({
                        selectedReqMenuItem: e.currentTarget
                    }),
                    this.hideMenu()
                }
            }, {
                key: "setTrace",
                value: function(e) {
                    var a = this;
                    null != e && m.a.post(A.parseTraceUrl + "/" + this.state.spec.ID + "/" + this.state.msg.ID, e).then((function(e) {
                        console.log("parsed msg data", e.data),
                        e.data.parsed_fields.forEach((function(e) {
                            a.state.isoMsg.get(e.ID).setState({
                                selected: !0,
                                fieldValue: e.Value
                            })
                        }
                        ))
                    }
                    )).catch((function(e) {
                        console.log("error", e),
                        a.processError(e)
                    }
                    )),
                    this.setStateAndPushUp({
                        showTraceInputDialog: !1
                    })
                }
            }, {
                key: "showUnImplementedError",
                value: function() {
                    this.setStateAndPushUp({
                        errorMessage: "This functionality has not been implemented. Please try the old version of application.",
                        errDialogVisible: !0
                    })
                }
            }, {
                key: "closeLoadMsgDialog",
                value: function(e, a) {
                    var t = this;
                    this.setStateAndPushUp({
                        showLoadMessagesDialog: !1,
                        currentDataSet: e
                    }),
                    null != e ? m.a.get(A.loadMsgUrl, {
                        params: {
                            specId: this.state.spec.ID,
                            msgId: this.state.msg.ID,
                            dsName: e
                        }
                    }).then((function(e) {
                        console.log("saved msg = ", e.data.saved_message),
                        e.data.saved_message.req_data.forEach((function(e) {
                            t.state.isoMsg.get(e.ID).setState({
                                selected: !0,
                                fieldValue: e.Value
                            })
                        }
                        )),
                        t.setState({
                            testCase: e.data.saved_message
                        })
                    }
                    )).catch((function(e) {
                        console.log(e),
                        t.processError(e)
                    }
                    )) : null != a && (this.setState({
                        errDialogVisible: !0,
                        errorMessage: a
                    }),
                    this.showErrorDialog())
                }
            }, {
                key: "showInfoDialog",
                value: function(e) {
                    this.setStateAndPushUp({
                        errDialogVisible: !0,
                        errorMessage: e
                    })
                }
            }, {
                key: "msgSaveSuccess",
                value: function(e, a) {
                    var t = "saved";
                    a && (t = "updated"),
                    this.showInfoDialog("Message ".concat(e, " ").concat(t, " successfully.")),
                    this.setStateAndPushUp({
                        showSaveMsgDialog: !1
                    })
                }
            }, {
                key: "msgSaveFailed",
                value: function(e) {
                    this.processError(e),
                    this.setStateAndPushUp({
                        showSaveMsgDialog: !1
                    })
                }
            }, {
                key: "msgSaveCancelled",
                value: function() {
                    this.setStateAndPushUp({
                        showSaveMsgDialog: !1
                    })
                }
            }, {
                key: "showSaveMsgDialog",
                value: function() {
                    var e = [];
                    k.getMsgContent(this.state.isoMsg, e, []),
                    this.setStateAndPushUp({
                        saveData: e,
                        showSaveMsgDialog: !0
                    })
                }
            }, {
                key: "showTraceInputsDialog",
                value: function() {
                    this.hideMenu(),
                    this.setStateAndPushUp({
                        showTraceInputDialog: !0
                    })
                }
            }, {
                key: "showLoadMessagesDialog",
                value: function() {
                    this.hideMenu(),
                    this.setStateAndPushUp({
                        showLoadMessagesDialog: !0
                    })
                }
            }, {
                key: "closeErrorDialog",
                value: function() {
                    this.setStateAndPushUp({
                        errDialogVisible: !1,
                        errorMessage: null
                    })
                }
            }, {
                key: "showErrorDialog",
                value: function(e) {
                    this.setStateAndPushUp({
                        errorMessage: e,
                        errDialogVisible: !0
                    })
                }
            }, {
                key: "sendToHost",
                value: function() {
                    var e = this;
                    this.hideMenu();
                    var a = []
                      , t = [];
                    if (k.getMsgContent(this.state.isoMsg, a, t),
                    t.length > 0) {
                        var n = "";
                        return t.forEach((function(e) {
                            return n += e + "\n"
                        }
                        )),
                        this.setStateAndPushUp({
                            errorMessage: n
                        }),
                        void this.showErrorDialog()
                    }
                    console.log(a);
                    var r = a.reduce((function(e, a, t) {
                        return 1 === t ? e.Name + ":" + e.Value + "\n" + a.Name + ":" + a.Value + "\n" : e + a.Name + ":" + a.Value + "\n"
                    }
                    ));
                    this.setStateAndPushUp({
                        showResponse: !1,
                        responseData: null,
                        reqClipboardData: r
                    });
                    var o = "host=" + this.state.targetServerIp + "&port=" + this.state.targetServerPort + "&mli=" + this.state.mliType + "&specId=" + this.state.spec.ID + "&msgId=" + this.state.msg.ID + "&msg=" + JSON.stringify(a);
                    m.a.post(A.sendMsgUrl, o).then((function(a) {
                        console.log("Response from server", a.data.response_fields),
                        e.setStateAndPushUp({
                            showResponse: !0,
                            responseData: a.data.response_fields
                        })
                    }
                    )).catch((function(a) {
                        console.log("error = ", a),
                        e.processError(a)
                    }
                    ))
                }
            }, {
                key: "processError",
                value: function(e) {
                    if (!e.response)
                        return console.log("Error = ", e),
                        void this.setStateAndPushUp({
                            errorMessage: "Error: Unable to reach API server",
                            errDialogVisible: !0
                        });
                    console.log(e.response),
                    400 === e.response.status ? this.setStateAndPushUp({
                        errorMessage: e.response.data.error,
                        errDialogVisible: !0
                    }) : this.setStateAndPushUp({
                        errorMessage: "Unexpected error from server - " + e.response.status,
                        errDialogVisible: !0
                    })
                }
            }, {
                key: "getTemplateLabel",
                value: function() {
                    return "Spec/Msg: ".concat(this.state.spec.Name, "// ").concat(this.state.msg.Name)
                }
            }, {
                key: "onFieldUpdate",
                value: function(e) {}
            }, {
                key: "componentDidMount",
                value: function() {
                    this.getMessageTemplate(this.props.spec, this.props.msg)
                }
            }, {
                key: "getMessageTemplate",
                value: function(e, a) {
                    var t = this
                      , n = this.props.specs.find((function(a) {
                        return a.Name === e ? a : null
                    }
                    ))
                      , r = n.Messages.find((function(e) {
                        return e.Name === a ? e : null
                    }
                    ))
                      , o = A.templateUrl + "/" + n.ID + "/" + r.ID;
                    console.log(o),
                    m.a.get(o).then((function(e) {
                        var a = new Map;
                        a.set("msg_template", e.data),
                        a.set("spec_id", n.ID),
                        a.set("msg_id", r.ID),
                        t.setStateAndPushUp({
                            spec: n,
                            msg: r,
                            msgTemplate: e.data,
                            loaded: !0,
                            isoMsg: a
                        }),
                        console.log("MsgTemplate = ", t.state.msgTemplate)
                    }
                    )).catch((function(e) {
                        console.log(e),
                        t.setStateAndPushUp({
                            errorMessage: e,
                            errDialogVisible: !0
                        })
                    }
                    ))
                }
            }, {
                key: "appendFieldContent",
                value: function(e, a, t, n) {
                    e.push(r.a.createElement(z, {
                        key: a.ID,
                        field: a,
                        isoMsg: t,
                        level: n,
                        onFieldUpdate: this.onFieldUpdate
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    var e, a = this, t = [];
                    return !0 === this.state.loaded && this.state.msgTemplate.fields.forEach((function(e) {
                        a.appendFieldContent(t, e, a.state.isoMsg, 0)
                    }
                    )),
                    r.a.createElement(r.a.Fragment, null, r.a.createElement(T, {
                        show: this.state.errDialogVisible,
                        msg: this.state.errorMessage,
                        onClose: this.closeErrorDialog
                    }), r.a.createElement(Y, {
                        show: this.state.showLoadMessagesDialog,
                        specId: this.state.spec.ID,
                        msgId: this.state.msg.ID,
                        closeLoadMsgDialog: this.closeLoadMsgDialog
                    }), r.a.createElement(ae, {
                        show: this.state.showTraceInputDialog,
                        setTrace: this.setTrace
                    }), r.a.createElement(oe, {
                        show: this.state.showSaveMsgDialog,
                        msgId: this.state.msg.ID,
                        initialMessage: this.state.currentDataSet,
                        specId: this.state.spec.ID,
                        data: this.state.saveData,
                        responseData: this.state.responseData,
                        msgName: this.state.currentDataSet,
                        msgSaveSuccess: this.msgSaveSuccess,
                        msgSaveFailed: this.msgSaveFailed,
                        msgSaveCancelled: this.msgSaveCancelled
                    }), r.a.createElement(ne, {
                        show: this.state.showEditTCDialog,
                        msgId: this.state.msg.ID,
                        specId: this.state.spec.ID,
                        msgName: this.state.currentDataSet,
                        responseData: null === (e = this.state.testCase) || void 0 === e ? void 0 : e.resp_data,
                        onCancel: function() {
                            a.showEditTCDialog(!1)
                        },
                        onClose: function() {
                            a.showErrorDialog("TC config updated successfully.")
                        }
                    }), r.a.createElement(le.a, {
                        position: "static",
                        variant: "elevation",
                        style: {
                            width: "80%",
                            float: "left"
                        }
                    }, r.a.createElement(ue.a, {
                        value: this.state.selectedTab,
                        onChange: this.tabChanged,
                        "aria-label": "IsoSim Tabs",
                        centered: !0
                    }, r.a.createElement(de.a, {
                        label: "Messaging"
                    }), r.a.createElement(de.a, {
                        label: "History"
                    }), r.a.createElement(de.a, {
                        label: "Utilities"
                    }))), r.a.createElement(be, {
                        value: this.state.selectedTab,
                        index: 0
                    }, r.a.createElement("div", {
                        style: {
                            display: "inline-block",
                            width: "50%",
                            float: "left",
                            fill: "aqua",
                            marginTop: "20px"
                        }
                    }, r.a.createElement("div", null, r.a.createElement(ce, {
                        onChange: this.networkSettingsChanged,
                        serverIP: this.state.targetServerIp,
                        port: this.state.targetServerPort,
                        mliType: this.state.mliType
                    }), r.a.createElement(ie.a, {
                        size: "small",
                        color: "primary",
                        fullWidth: !0,
                        variant: "contained"
                    }, r.a.createElement(C.a, {
                        onClick: this.showTraceInputsDialog
                    }, "Parse"), r.a.createElement(C.a, {
                        onClick: this.showLoadMessagesDialog
                    }, "Load"), r.a.createElement(C.a, {
                        onClick: this.showSaveMsgDialog
                    }, "Save"), r.a.createElement(C.a, {
                        onClick: function() {
                            return a.showEditTCDialog(!0)
                        },
                        disabled: null == this.state.testCase || null == this.state.testCase.resp_data
                    }, "Edit TC"), r.a.createElement(C.a, {
                        onClick: this.sendToHost
                    }, "Send"), r.a.createElement(C.a, {
                        onClick: this.showResponseDialog,
                        disabled: null == this.state.responseData
                    }, "Show Response"))), r.a.createElement(X.a, {
                        variation: "outlined",
                        style: {
                            verticalAlign: "middle"
                        }
                    }, r.a.createElement("table", {
                        border: "0",
                        align: "center",
                        style: {
                            align: "center",
                            marginTop: "10px",
                            width: "80%"
                        }
                    }, r.a.createElement("thead", null, r.a.createElement("tr", {
                        style: {
                            fontFamily: "lato-regular",
                            backgroundColor: "#ff8f5b",
                            fontSize: "15px",
                            borderBottom: "solid",
                            borderColor: "blue"
                        }
                    }, r.a.createElement("td", {
                        colSpan: "3",
                        align: "center"
                    }, r.a.createElement("div", {
                        style: {
                            display: "inline-block"
                        }
                    }, this.getTemplateLabel()))), r.a.createElement("tr", {
                        style: {
                            fontFamily: "lato-regular",
                            backgroundColor: "#c4876e",
                            fontSize: "15px",
                            borderBottom: "solid",
                            borderColor: "blue"
                        }
                    }, r.a.createElement("td", {
                        colSpan: "3",
                        align: "center"
                    }, r.a.createElement("div", {
                        style: {
                            display: "inline-block"
                        }
                    }, "Msg/TestCase: ".concat(this.state.currentDataSet)))), r.a.createElement("tr", {
                        style: {
                            fontFamily: "lato-regular",
                            backgroundColor: "#ff8f5b",
                            fontSize: "14px"
                        }
                    }, r.a.createElement("td", {
                        align: "center"
                    }, "Selection"), r.a.createElement("td", {
                        align: "center",
                        style: {
                            width: "35%"
                        }
                    }, " Field"), r.a.createElement("td", {
                        align: "center",
                        style: {
                            width: "70%"
                        }
                    }, "Field Data"))), r.a.createElement("tbody", null, t))), r.a.createElement(Q, {
                        show: this.state.showResponse,
                        reqData: this.state.reqClipboardData,
                        onClose: this.hideResponse,
                        testCase: this.state.testCase,
                        data: this.state.responseData,
                        dialogTitle: "Response - [" + this.getTemplateLabel() + "]",
                        msgTemplate: this.state.msgTemplate
                    }))), r.a.createElement(be, {
                        value: this.state.selectedTab,
                        index: 1
                    }, r.a.createElement("div", {
                        style: {
                            alignItems: "left",
                            width: "100%"
                        }
                    }, r.a.createElement(se, {
                        specId: this.state.spec.ID,
                        msgId: this.state.msg.ID,
                        initialMaxItems: this.state.msgHist.maxItems,
                        initialLogData: this.state.msgHist.logData,
                        saveState: this.saveHistState
                    }))), r.a.createElement(be, {
                        value: this.state.selectedTab,
                        index: 2
                    }, r.a.createElement("div", {
                        style: {
                            width: "100%"
                        }
                    }, r.a.createElement(fe, null))))
                }
            }]),
            a
        }(r.a.Component);
        function be(e) {
            var a = e.children
              , t = e.value
              , n = e.index
              , o = Object(y.a)(e, ["children", "value", "index"]);
            return r.a.createElement("div", Object.assign({
                role: "tabpanel",
                hidden: t !== n,
                id: "simple-tabpanel-".concat(n),
                "aria-labelledby": "simple-tab-".concat(n)
            }, o), t === n && r.a.createElement(b.a, null, a))
        }
        var Se = t(231)
          , Ae = t(121)
          , Ie = t.n(Ae)
          , De = t(229)
          , Ne = t(227)
          , Oe = t(228)
          , Me = t(230)
          , Te = t(226)
          , Re = t(225)
          , Ue = Object(Re.a)((function(e) {
            return {
                root: {
                    color: e.palette.text.secondary,
                    "&:hover > $content": {
                        backgroundColor: e.palette.action.hover
                    },
                    "&:focus > $content, &$selected > $content": {
                        backgroundColor: "var(--tree-view-bg-color, ".concat(e.palette.grey[400], ")"),
                        color: "var(--tree-view-color)"
                    },
                    "&:focus > $content $label, &:hover > $content $label, &$selected > $content $label": {
                        backgroundColor: "transparent"
                    }
                },
                content: {
                    color: e.palette.text.secondary,
                    borderTopRightRadius: e.spacing(2),
                    borderBottomRightRadius: e.spacing(2),
                    paddingRight: e.spacing(1),
                    fontWeight: e.typography.fontWeightMedium,
                    "$expanded > &": {
                        fontWeight: e.typography.fontWeightRegular
                    }
                },
                group: {
                    marginLeft: 10,
                    "& $content": {
                        paddingLeft: e.spacing(3)
                    }
                },
                expanded: {},
                selected: {},
                label: {
                    fontWeight: "inherit",
                    color: "inherit"
                },
                labelRoot: {
                    display: "flex",
                    alignItems: "center",
                    padding: e.spacing(.8, 0)
                },
                labelIcon: {
                    marginRight: e.spacing(1)
                },
                labelText: {
                    fontWeight: "inherit",
                    flexGrow: 1
                }
            }
        }
        ));
        function ke(e) {
            var a = Ue()
              , t = e.labelText
              , n = e.labelIcon
              , o = e.labelInfo
              , c = e.color
              , i = e.bgColor
              , s = Object(y.a)(e, ["labelText", "labelIcon", "labelInfo", "color", "bgColor"]);
            return r.a.createElement(Te.a, Object.assign({
                label: r.a.createElement("div", {
                    className: a.labelRoot
                }, r.a.createElement(n, {
                    color: "inherit",
                    className: a.labelIcon
                }), r.a.createElement(me.a, {
                    variant: "body2",
                    className: a.labelText
                }, t), r.a.createElement(me.a, {
                    variant: "caption",
                    color: "inherit"
                }, o)),
                style: {
                    "--tree-view-color": c,
                    "--tree-view-bg-color": i
                },
                classes: {
                    root: a.root,
                    content: a.content,
                    expanded: a.expanded,
                    selected: a.selected,
                    group: a.group,
                    label: a.label
                }
            }, s))
        }
        var we = function(e) {
            function a(e) {
                var t;
                return Object(i.a)(this, a),
                (t = Object(l.a)(this, Object(u.a)(a).call(this, e))).state = {
                    specs: [],
                    loaded: !1,
                    errDialogVisible: !1,
                    errorMessage: ""
                },
                t.nodeSelected = t.nodeSelected.bind(Object(d.a)(t)),
                t
            }
            return Object(h.a)(a, e),
            Object(s.a)(a, [{
                key: "nodeSelected",
                value: function(e, a) {
                    var t = a.match("nodeId_([0-9]+)_([0-9]+)");
                    t && (console.log("matched", this.treeInstance),
                    this.props.msgSelected(t[1], t[2]))
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    m.a.get(A.allSpecsUrl).then((function(a) {
                        console.log("allSpecs", a.data),
                        e.setState({
                            specs: a.data.specs,
                            loaded: !0
                        });
                        var t = setInterval((function() {
                            alert("Select one of the spec and message in the tree to get started!"),
                            clearInterval(t)
                        }
                        ), 2)
                    }
                    )).catch((function(e) {
                        return console.log(e)
                    }
                    ))
                }
            }, {
                key: "buildMessages",
                value: function(e) {
                    var a = [];
                    return e.Messages.forEach((function(t) {
                        a.push(r.a.createElement(ke, {
                            nodeId: "nodeId_" + e.ID + "_" + t.ID,
                            sid: e.ID,
                            mid: t.ID,
                            label: t.Name
                        }))
                    }
                    )),
                    a
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    if (!0 === this.state.loaded) {
                        var a = [];
                        this.state.specs.forEach((function(t) {
                            a.push(r.a.createElement(ke, {
                                align: "left",
                                nodeId: "nodeId_" + t.ID,
                                icon: r.a.createElement(Ne.a, {
                                    color: "primary"
                                }),
                                label: t.Name
                            }, e.buildMessages(t)))
                        }
                        ));
                        var t = r.a.createElement(ke, {
                            nodeId: "nodeId_0",
                            icon: r.a.createElement(Oe.a, {
                                color: "primary"
                            }),
                            label: "ISO8583 Specifications"
                        }, a);
                        return this.treeInstance = r.a.createElement(De.a, {
                            onNodeSelect: this.nodeSelected,
                            defaultExpanded: ["nodeId_0"],
                            defaultCollapseIcon: r.a.createElement(Ce.a, null),
                            defaultExpandIcon: r.a.createElement(Ie.a, null),
                            defaultParentIcon: r.a.createElement(Ne.a, {
                                color: "primary"
                            }),
                            defaultEndIcon: r.a.createElement(Me.a, {
                                color: "primary"
                            })
                        }, t),
                        r.a.createElement(r.a.Fragment, null, this.treeInstance)
                    }
                    return null
                }
            }]),
            a
        }(r.a.Component)
          , Pe = function(e) {
            function a(e) {
                var t;
                return Object(i.a)(this, a),
                (t = Object(l.a)(this, Object(u.a)(a).call(this, e))).state = {
                    specs: [],
                    currentSpec: "Select",
                    currentSpecMsg: "",
                    showMsgTemplate: !1,
                    loaded: !1,
                    errDialogVisible: !1,
                    errorMessage: ""
                },
                t.specChanged = t.specChanged.bind(Object(d.a)(t)),
                t.messageChanged = t.messageChanged.bind(Object(d.a)(t)),
                t.msgSelected = t.msgSelected.bind(Object(d.a)(t)),
                t.getSpecByID = t.getSpecByID.bind(Object(d.a)(t)),
                t.msgTemplateRef = r.a.createRef(),
                t
            }
            return Object(h.a)(a, e),
            Object(s.a)(a, [{
                key: "msgSelected",
                value: function(e, a) {
                    console.log(e, a),
                    console.log(this.state.specs);
                    var t = this.getSpecByID(parseInt(e));
                    console.log("spec = ", t);
                    var n = null;
                    t.Messages.forEach((function(e) {
                        e.ID === parseInt(a) && (n = e)
                    }
                    )),
                    this.setState({
                        loaded: !0,
                        currentSpec: t.Name,
                        currentSpecMsg: n.Name
                    })
                }
            }, {
                key: "closeErrorDialog",
                value: function() {
                    this.setState({
                        errDialogVisible: !1
                    })
                }
            }, {
                key: "showErrorDialog",
                value: function() {
                    this.setState({
                        errDialogVisible: !0
                    })
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    m.a.get(A.allSpecsUrl).then((function(a) {
                        console.log(a.data),
                        e.setState({
                            specs: a.data.specs,
                            loaded: !0
                        })
                    }
                    )).catch((function(e) {
                        return console.log(e)
                    }
                    ))
                }
            }, {
                key: "render",
                value: function() {
                    var e, a;
                    return !0 === this.state.loaded && (null == (a = this.getCurrentSpec()) && (a = this.state.specs[0]),
                    e = this.state.currentSpecMsg ? this.state.currentSpecMsg : a.Messages[0].Name),
                    r.a.createElement(r.a.Fragment, null, r.a.createElement("div", null, r.a.createElement(Se.a, {
                        show: this.state.errDialogVisible,
                        onHide: this.closeErrorDialog
                    }, r.a.createElement(Se.a.Header, {
                        closeButton: !0
                    }, r.a.createElement(Se.a.Title, null, "Error")), r.a.createElement(Se.a.Body, null, this.state.errorMessage), r.a.createElement(Se.a.Footer, null, r.a.createElement(Z.a, {
                        variant: "secondary",
                        onClick: this.closeErrorDialog
                    }, "Close"))), r.a.createElement("div", {
                        style: {
                            float: "left",
                            display: "inline-block",
                            marginRight: "20px",
                            marginLeft: "20px",
                            backgroundColor: "#fbfff0"
                        }
                    }, r.a.createElement(we, {
                        msgSelected: this.msgSelected
                    })), r.a.createElement("div", {
                        align: "center",
                        style: {
                            backgroundColor: "#fbfff0",
                            float: "right",
                            width: "80%"
                        }
                    }, this.state.loaded && "Select" !== this.state.currentSpec ? r.a.createElement(ve, {
                        key: this.state.currentSpec + "_" + e,
                        ref: this.msgTemplateRef,
                        specs: this.state.specs,
                        spec: this.state.currentSpec,
                        msg: this.state.currentSpecMsg
                    }) : null)))
                }
            }, {
                key: "specChanged",
                value: function(e) {
                    this.setState({
                        currentSpec: e.target.value,
                        currentSpecMsg: ""
                    }),
                    console.log(e.target.value),
                    this.state.loaded && "Select" !== e.target.value && console.log("calling update - specChanged")
                }
            }, {
                key: "messageChanged",
                value: function(e) {
                    this.setState({
                        currentSpecMsg: e.target.value
                    }),
                    this.state.loaded && "Select" !== this.state.currentSpec && console.log("calling update - msgChanged")
                }
            }, {
                key: "specsDropDown",
                value: function() {
                    return r.a.createElement("select", {
                        style: {
                            fontFamily: "lato-regular",
                            width: "200px"
                        },
                        onChange: this.specChanged
                    }, r.a.createElement("option", {
                        key: "Select",
                        value: "Select"
                    }, "Select"), this.state.specs.map((function(e) {
                        return r.a.createElement("option", {
                            key: e.Name,
                            value: e.Name
                        }, e.Name)
                    }
                    )))
                }
            }, {
                key: "messagesDropDown",
                value: function() {
                    var e;
                    return this.state.loaded && (e = this.getCurrentSpec()),
                    "Select" === this.state.currentSpec ? r.a.createElement("select", null) : r.a.createElement("select", {
                        value: this.state.currentSpecMsg,
                        style: {
                            fontFamily: "lato-regular",
                            width: "150px"
                        },
                        onChange: this.messageChanged
                    }, e.Messages.map((function(e) {
                        return r.a.createElement("option", {
                            key: e.ID,
                            value: e.Name
                        }, e.Name)
                    }
                    )))
                }
            }, {
                key: "getCurrentSpec",
                value: function() {
                    var e = this;
                    return this.state.specs.find((function(a, t) {
                        return a.Name === e.state.currentSpec ? a : null
                    }
                    ))
                }
            }, {
                key: "getSpecByName",
                value: function(e) {
                    return this.state.specs.find((function(a, t) {
                        return a.Name === e ? a : null
                    }
                    ))
                }
            }, {
                key: "getSpecByID",
                value: function(e) {
                    return this.state.specs.find((function(a, t) {
                        return a.ID === e ? a : null
                    }
                    ))
                }
            }]),
            a
        }(r.a.Component);
        var Fe = function() {
            return r.a.createElement("div", {
                style: {
                    backgroundColor: "#fbfff0"
                }
            }, r.a.createElement("h1", {
                style: {
                    fontFamily: "shadows-into-light"
                }
            }, "ISO WebSim - ISO8583 Web Simulator"), r.a.createElement("a", {
                style: {
                    fontFamily: "lato-regular",
                    fontSize: "12px"
                },
                href: "/iso/v0/server",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "[Manage Servers]"), r.a.createElement("div", {
                className: "App"
            }, r.a.createElement(Pe, null)))
        };
        Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
        t(168);
        c.a.render(r.a.createElement(Fe, {
            style: {
                backgroundColor: "#fbfff0"
            }
        }), document.getElementById("root")),
        "serviceWorker"in navigator && navigator.serviceWorker.ready.then((function(e) {
            e.unregister()
        }
        )).catch((function(e) {
            console.error(e.message)
        }
        ))
    }
}, [[137, 1, 2]]]);
//# sourceMappingURL=main.f4601f26.chunk.js.map
