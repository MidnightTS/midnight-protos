"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MusicBriefInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicBriefInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MusicBriefInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class MusicBriefInfo extends pb_1.Message {
    constructor(data) {
        super();
        _MusicBriefInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1002, 982], __classPrivateFieldGet(this, _MusicBriefInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("Unk2700_JNENCBCGPGO" in data && data.Unk2700_JNENCBCGPGO != undefined) {
                this.Unk2700_JNENCBCGPGO = data.Unk2700_JNENCBCGPGO;
            }
            if ("Unk2700_OJBPHCIDAEB" in data && data.Unk2700_OJBPHCIDAEB != undefined) {
                this.Unk2700_OJBPHCIDAEB = data.Unk2700_OJBPHCIDAEB;
            }
            if ("Unk2700_FGCJEGHOKPG" in data && data.Unk2700_FGCJEGHOKPG != undefined) {
                this.Unk2700_FGCJEGHOKPG = data.Unk2700_FGCJEGHOKPG;
            }
            if ("Unk2700_DFIBAIILJHN" in data && data.Unk2700_DFIBAIILJHN != undefined) {
                this.Unk2700_DFIBAIILJHN = data.Unk2700_DFIBAIILJHN;
            }
            if ("Unk2700_MKBNLEKMIMD" in data && data.Unk2700_MKBNLEKMIMD != undefined) {
                this.Unk2700_MKBNLEKMIMD = data.Unk2700_MKBNLEKMIMD;
            }
            if ("Unk2700_PINGIIAANMO" in data && data.Unk2700_PINGIIAANMO != undefined) {
                this.Unk2700_PINGIIAANMO = data.Unk2700_PINGIIAANMO;
            }
            if ("Unk2700_MONNIDCNDFI" in data && data.Unk2700_MONNIDCNDFI != undefined) {
                this.Unk2700_MONNIDCNDFI = data.Unk2700_MONNIDCNDFI;
            }
            if ("version" in data && data.version != undefined) {
                this.version = data.version;
            }
            if ("Unk2700_GGHNLPMAGME" in data && data.Unk2700_GGHNLPMAGME != undefined) {
                this.Unk2700_GGHNLPMAGME = data.Unk2700_GGHNLPMAGME;
            }
            if ("Unk2700_GDCGOMNBMEO" in data && data.Unk2700_GDCGOMNBMEO != undefined) {
                this.Unk2700_GDCGOMNBMEO = data.Unk2700_GDCGOMNBMEO;
            }
            if ("Unk2700_JAEONBMBFJJ" in data && data.Unk2700_JAEONBMBFJJ != undefined) {
                this.Unk2700_JAEONBMBFJJ = data.Unk2700_JAEONBMBFJJ;
            }
            if ("Unk2700_GBCGGDONMCD" in data && data.Unk2700_GBCGGDONMCD != undefined) {
                this.Unk2700_GBCGGDONMCD = data.Unk2700_GBCGGDONMCD;
            }
            if ("Unk2700_LPEKFJBNEJM" in data && data.Unk2700_LPEKFJBNEJM != undefined) {
                this.Unk2700_LPEKFJBNEJM = data.Unk2700_LPEKFJBNEJM;
            }
            if ("Unk2700_DNLEGADDHKM" in data && data.Unk2700_DNLEGADDHKM != undefined) {
                this.Unk2700_DNLEGADDHKM = data.Unk2700_DNLEGADDHKM;
            }
            if ("Unk2700_BFMNMPPNBHH" in data && data.Unk2700_BFMNMPPNBHH != undefined) {
                this.Unk2700_BFMNMPPNBHH = data.Unk2700_BFMNMPPNBHH;
            }
            if ("max_score" in data && data.max_score != undefined) {
                this.max_score = data.max_score;
            }
            if ("Unk2700_KAMOCHAKPGP" in data && data.Unk2700_KAMOCHAKPGP != undefined) {
                this.Unk2700_KAMOCHAKPGP = data.Unk2700_KAMOCHAKPGP;
            }
            if ("Unk2700_KLPHBLCIOEC" in data && data.Unk2700_KLPHBLCIOEC != undefined) {
                this.Unk2700_KLPHBLCIOEC = data.Unk2700_KLPHBLCIOEC;
            }
            if ("Unk2700_CEPGMKAHHCD" in data && data.Unk2700_CEPGMKAHHCD != undefined) {
                this.Unk2700_CEPGMKAHHCD = data.Unk2700_CEPGMKAHHCD;
            }
            if ("Unk2700_PMCPLPMJCEC" in data && data.Unk2700_PMCPLPMJCEC != undefined) {
                this.Unk2700_PMCPLPMJCEC = data.Unk2700_PMCPLPMJCEC;
            }
        }
    }
    get Unk2700_JNENCBCGPGO() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set Unk2700_JNENCBCGPGO(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get Unk2700_OJBPHCIDAEB() {
        return pb_1.Message.getFieldWithDefault(this, 8, false);
    }
    set Unk2700_OJBPHCIDAEB(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get Unk2700_FGCJEGHOKPG() {
        return pb_1.Message.getFieldWithDefault(this, 1, false);
    }
    set Unk2700_FGCJEGHOKPG(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get Unk2700_DFIBAIILJHN() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set Unk2700_DFIBAIILJHN(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get Unk2700_MKBNLEKMIMD() {
        return pb_1.Message.getFieldWithDefault(this, 1182, 0);
    }
    set Unk2700_MKBNLEKMIMD(value) {
        pb_1.Message.setField(this, 1182, value);
    }
    get Unk2700_PINGIIAANMO() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set Unk2700_PINGIIAANMO(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get Unk2700_MONNIDCNDFI() {
        return pb_1.Message.getFieldWithDefault(this, 10, "");
    }
    set Unk2700_MONNIDCNDFI(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get version() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set version(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get Unk2700_GGHNLPMAGME() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set Unk2700_GGHNLPMAGME(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get Unk2700_GDCGOMNBMEO() {
        return pb_1.Message.getFieldWithDefault(this, 1002, []);
    }
    set Unk2700_GDCGOMNBMEO(value) {
        pb_1.Message.setField(this, 1002, value);
    }
    get Unk2700_JAEONBMBFJJ() {
        return pb_1.Message.getFieldWithDefault(this, 982, []);
    }
    set Unk2700_JAEONBMBFJJ(value) {
        pb_1.Message.setField(this, 982, value);
    }
    get Unk2700_GBCGGDONMCD() {
        return pb_1.Message.getFieldWithDefault(this, 9, false);
    }
    set Unk2700_GBCGGDONMCD(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get Unk2700_LPEKFJBNEJM() {
        return pb_1.Message.getFieldWithDefault(this, 1822, 0);
    }
    set Unk2700_LPEKFJBNEJM(value) {
        pb_1.Message.setField(this, 1822, value);
    }
    get Unk2700_DNLEGADDHKM() {
        return pb_1.Message.getFieldWithDefault(this, 11, false);
    }
    set Unk2700_DNLEGADDHKM(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get Unk2700_BFMNMPPNBHH() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set Unk2700_BFMNMPPNBHH(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get max_score() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set max_score(value) {
        pb_1.Message.setField(this, 14, value);
    }
    get Unk2700_KAMOCHAKPGP() {
        return pb_1.Message.getFieldWithDefault(this, 576, 0);
    }
    set Unk2700_KAMOCHAKPGP(value) {
        pb_1.Message.setField(this, 576, value);
    }
    get Unk2700_KLPHBLCIOEC() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set Unk2700_KLPHBLCIOEC(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get Unk2700_CEPGMKAHHCD() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set Unk2700_CEPGMKAHHCD(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get Unk2700_PMCPLPMJCEC() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set Unk2700_PMCPLPMJCEC(value) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data) {
        const message = new MusicBriefInfo({});
        if (data.Unk2700_JNENCBCGPGO != null) {
            message.Unk2700_JNENCBCGPGO = data.Unk2700_JNENCBCGPGO;
        }
        if (data.Unk2700_OJBPHCIDAEB != null) {
            message.Unk2700_OJBPHCIDAEB = data.Unk2700_OJBPHCIDAEB;
        }
        if (data.Unk2700_FGCJEGHOKPG != null) {
            message.Unk2700_FGCJEGHOKPG = data.Unk2700_FGCJEGHOKPG;
        }
        if (data.Unk2700_DFIBAIILJHN != null) {
            message.Unk2700_DFIBAIILJHN = data.Unk2700_DFIBAIILJHN;
        }
        if (data.Unk2700_MKBNLEKMIMD != null) {
            message.Unk2700_MKBNLEKMIMD = data.Unk2700_MKBNLEKMIMD;
        }
        if (data.Unk2700_PINGIIAANMO != null) {
            message.Unk2700_PINGIIAANMO = data.Unk2700_PINGIIAANMO;
        }
        if (data.Unk2700_MONNIDCNDFI != null) {
            message.Unk2700_MONNIDCNDFI = data.Unk2700_MONNIDCNDFI;
        }
        if (data.version != null) {
            message.version = data.version;
        }
        if (data.Unk2700_GGHNLPMAGME != null) {
            message.Unk2700_GGHNLPMAGME = data.Unk2700_GGHNLPMAGME;
        }
        if (data.Unk2700_GDCGOMNBMEO != null) {
            message.Unk2700_GDCGOMNBMEO = data.Unk2700_GDCGOMNBMEO;
        }
        if (data.Unk2700_JAEONBMBFJJ != null) {
            message.Unk2700_JAEONBMBFJJ = data.Unk2700_JAEONBMBFJJ;
        }
        if (data.Unk2700_GBCGGDONMCD != null) {
            message.Unk2700_GBCGGDONMCD = data.Unk2700_GBCGGDONMCD;
        }
        if (data.Unk2700_LPEKFJBNEJM != null) {
            message.Unk2700_LPEKFJBNEJM = data.Unk2700_LPEKFJBNEJM;
        }
        if (data.Unk2700_DNLEGADDHKM != null) {
            message.Unk2700_DNLEGADDHKM = data.Unk2700_DNLEGADDHKM;
        }
        if (data.Unk2700_BFMNMPPNBHH != null) {
            message.Unk2700_BFMNMPPNBHH = data.Unk2700_BFMNMPPNBHH;
        }
        if (data.max_score != null) {
            message.max_score = data.max_score;
        }
        if (data.Unk2700_KAMOCHAKPGP != null) {
            message.Unk2700_KAMOCHAKPGP = data.Unk2700_KAMOCHAKPGP;
        }
        if (data.Unk2700_KLPHBLCIOEC != null) {
            message.Unk2700_KLPHBLCIOEC = data.Unk2700_KLPHBLCIOEC;
        }
        if (data.Unk2700_CEPGMKAHHCD != null) {
            message.Unk2700_CEPGMKAHHCD = data.Unk2700_CEPGMKAHHCD;
        }
        if (data.Unk2700_PMCPLPMJCEC != null) {
            message.Unk2700_PMCPLPMJCEC = data.Unk2700_PMCPLPMJCEC;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.Unk2700_JNENCBCGPGO != null) {
            data.Unk2700_JNENCBCGPGO = this.Unk2700_JNENCBCGPGO;
        }
        if (this.Unk2700_OJBPHCIDAEB != null) {
            data.Unk2700_OJBPHCIDAEB = this.Unk2700_OJBPHCIDAEB;
        }
        if (this.Unk2700_FGCJEGHOKPG != null) {
            data.Unk2700_FGCJEGHOKPG = this.Unk2700_FGCJEGHOKPG;
        }
        if (this.Unk2700_DFIBAIILJHN != null) {
            data.Unk2700_DFIBAIILJHN = this.Unk2700_DFIBAIILJHN;
        }
        if (this.Unk2700_MKBNLEKMIMD != null) {
            data.Unk2700_MKBNLEKMIMD = this.Unk2700_MKBNLEKMIMD;
        }
        if (this.Unk2700_PINGIIAANMO != null) {
            data.Unk2700_PINGIIAANMO = this.Unk2700_PINGIIAANMO;
        }
        if (this.Unk2700_MONNIDCNDFI != null) {
            data.Unk2700_MONNIDCNDFI = this.Unk2700_MONNIDCNDFI;
        }
        if (this.version != null) {
            data.version = this.version;
        }
        if (this.Unk2700_GGHNLPMAGME != null) {
            data.Unk2700_GGHNLPMAGME = this.Unk2700_GGHNLPMAGME;
        }
        if (this.Unk2700_GDCGOMNBMEO != null) {
            data.Unk2700_GDCGOMNBMEO = this.Unk2700_GDCGOMNBMEO;
        }
        if (this.Unk2700_JAEONBMBFJJ != null) {
            data.Unk2700_JAEONBMBFJJ = this.Unk2700_JAEONBMBFJJ;
        }
        if (this.Unk2700_GBCGGDONMCD != null) {
            data.Unk2700_GBCGGDONMCD = this.Unk2700_GBCGGDONMCD;
        }
        if (this.Unk2700_LPEKFJBNEJM != null) {
            data.Unk2700_LPEKFJBNEJM = this.Unk2700_LPEKFJBNEJM;
        }
        if (this.Unk2700_DNLEGADDHKM != null) {
            data.Unk2700_DNLEGADDHKM = this.Unk2700_DNLEGADDHKM;
        }
        if (this.Unk2700_BFMNMPPNBHH != null) {
            data.Unk2700_BFMNMPPNBHH = this.Unk2700_BFMNMPPNBHH;
        }
        if (this.max_score != null) {
            data.max_score = this.max_score;
        }
        if (this.Unk2700_KAMOCHAKPGP != null) {
            data.Unk2700_KAMOCHAKPGP = this.Unk2700_KAMOCHAKPGP;
        }
        if (this.Unk2700_KLPHBLCIOEC != null) {
            data.Unk2700_KLPHBLCIOEC = this.Unk2700_KLPHBLCIOEC;
        }
        if (this.Unk2700_CEPGMKAHHCD != null) {
            data.Unk2700_CEPGMKAHHCD = this.Unk2700_CEPGMKAHHCD;
        }
        if (this.Unk2700_PMCPLPMJCEC != null) {
            data.Unk2700_PMCPLPMJCEC = this.Unk2700_PMCPLPMJCEC;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.Unk2700_JNENCBCGPGO != 0)
            writer.writeUint64(5, this.Unk2700_JNENCBCGPGO);
        if (this.Unk2700_OJBPHCIDAEB != false)
            writer.writeBool(8, this.Unk2700_OJBPHCIDAEB);
        if (this.Unk2700_FGCJEGHOKPG != false)
            writer.writeBool(1, this.Unk2700_FGCJEGHOKPG);
        if (this.Unk2700_DFIBAIILJHN != 0)
            writer.writeUint32(2, this.Unk2700_DFIBAIILJHN);
        if (this.Unk2700_MKBNLEKMIMD != 0)
            writer.writeUint32(1182, this.Unk2700_MKBNLEKMIMD);
        if (this.Unk2700_PINGIIAANMO != 0)
            writer.writeUint32(12, this.Unk2700_PINGIIAANMO);
        if (this.Unk2700_MONNIDCNDFI.length)
            writer.writeString(10, this.Unk2700_MONNIDCNDFI);
        if (this.version != 0)
            writer.writeUint32(15, this.version);
        if (this.Unk2700_GGHNLPMAGME != 0)
            writer.writeUint32(3, this.Unk2700_GGHNLPMAGME);
        if (this.Unk2700_GDCGOMNBMEO.length)
            writer.writePackedUint32(1002, this.Unk2700_GDCGOMNBMEO);
        if (this.Unk2700_JAEONBMBFJJ.length)
            writer.writePackedUint32(982, this.Unk2700_JAEONBMBFJJ);
        if (this.Unk2700_GBCGGDONMCD != false)
            writer.writeBool(9, this.Unk2700_GBCGGDONMCD);
        if (this.Unk2700_LPEKFJBNEJM != 0)
            writer.writeUint32(1822, this.Unk2700_LPEKFJBNEJM);
        if (this.Unk2700_DNLEGADDHKM != false)
            writer.writeBool(11, this.Unk2700_DNLEGADDHKM);
        if (this.Unk2700_BFMNMPPNBHH != 0)
            writer.writeUint32(13, this.Unk2700_BFMNMPPNBHH);
        if (this.max_score != 0)
            writer.writeUint32(14, this.max_score);
        if (this.Unk2700_KAMOCHAKPGP != 0)
            writer.writeUint32(576, this.Unk2700_KAMOCHAKPGP);
        if (this.Unk2700_KLPHBLCIOEC != 0)
            writer.writeUint32(7, this.Unk2700_KLPHBLCIOEC);
        if (this.Unk2700_CEPGMKAHHCD != 0)
            writer.writeUint64(4, this.Unk2700_CEPGMKAHHCD);
        if (this.Unk2700_PMCPLPMJCEC != 0)
            writer.writeUint32(6, this.Unk2700_PMCPLPMJCEC);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MusicBriefInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 5:
                    message.Unk2700_JNENCBCGPGO = reader.readUint64();
                    break;
                case 8:
                    message.Unk2700_OJBPHCIDAEB = reader.readBool();
                    break;
                case 1:
                    message.Unk2700_FGCJEGHOKPG = reader.readBool();
                    break;
                case 2:
                    message.Unk2700_DFIBAIILJHN = reader.readUint32();
                    break;
                case 1182:
                    message.Unk2700_MKBNLEKMIMD = reader.readUint32();
                    break;
                case 12:
                    message.Unk2700_PINGIIAANMO = reader.readUint32();
                    break;
                case 10:
                    message.Unk2700_MONNIDCNDFI = reader.readString();
                    break;
                case 15:
                    message.version = reader.readUint32();
                    break;
                case 3:
                    message.Unk2700_GGHNLPMAGME = reader.readUint32();
                    break;
                case 1002:
                    message.Unk2700_GDCGOMNBMEO = reader.readPackedUint32();
                    break;
                case 982:
                    message.Unk2700_JAEONBMBFJJ = reader.readPackedUint32();
                    break;
                case 9:
                    message.Unk2700_GBCGGDONMCD = reader.readBool();
                    break;
                case 1822:
                    message.Unk2700_LPEKFJBNEJM = reader.readUint32();
                    break;
                case 11:
                    message.Unk2700_DNLEGADDHKM = reader.readBool();
                    break;
                case 13:
                    message.Unk2700_BFMNMPPNBHH = reader.readUint32();
                    break;
                case 14:
                    message.max_score = reader.readUint32();
                    break;
                case 576:
                    message.Unk2700_KAMOCHAKPGP = reader.readUint32();
                    break;
                case 7:
                    message.Unk2700_KLPHBLCIOEC = reader.readUint32();
                    break;
                case 4:
                    message.Unk2700_CEPGMKAHHCD = reader.readUint64();
                    break;
                case 6:
                    message.Unk2700_PMCPLPMJCEC = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return MusicBriefInfo.deserialize(bytes);
    }
}
exports.MusicBriefInfo = MusicBriefInfo;
_MusicBriefInfo_one_of_decls = new WeakMap();
