"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _WinterCampActivityDetailInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinterCampActivityDetailInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: WinterCampActivityDetailInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./ItemParam");
const dependency_2 = require("./Unk2700_DIEGJDEIDKO");
const dependency_3 = require("./Unk2700_MBIDJDLLBNM");
const pb_1 = require("google-protobuf");
class WinterCampActivityDetailInfo extends pb_1.Message {
    constructor(data) {
        super();
        _WinterCampActivityDetailInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [9, 8, 14, 6, 2], __classPrivateFieldGet(this, _WinterCampActivityDetailInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("Unk2700_FBMHFJHDJNB" in data && data.Unk2700_FBMHFJHDJNB != undefined) {
                this.Unk2700_FBMHFJHDJNB = data.Unk2700_FBMHFJHDJNB;
            }
            if ("battle_info" in data && data.battle_info != undefined) {
                this.battle_info = data.battle_info;
            }
            if ("Unk2700_GALHBPGEGNL" in data && data.Unk2700_GALHBPGEGNL != undefined) {
                this.Unk2700_GALHBPGEGNL = data.Unk2700_GALHBPGEGNL;
            }
            if ("Unk2700_DKCGOPBHJHA" in data && data.Unk2700_DKCGOPBHJHA != undefined) {
                this.Unk2700_DKCGOPBHJHA = data.Unk2700_DKCGOPBHJHA;
            }
            if ("Unk2700_OOBOCEALLBE" in data && data.Unk2700_OOBOCEALLBE != undefined) {
                this.Unk2700_OOBOCEALLBE = data.Unk2700_OOBOCEALLBE;
            }
            if ("is_content_closed" in data && data.is_content_closed != undefined) {
                this.is_content_closed = data.is_content_closed;
            }
            if ("explore_info" in data && data.explore_info != undefined) {
                this.explore_info = data.explore_info;
            }
            if ("Unk2700_CFENLEBIKGG" in data && data.Unk2700_CFENLEBIKGG != undefined) {
                this.Unk2700_CFENLEBIKGG = data.Unk2700_CFENLEBIKGG;
            }
        }
    }
    get Unk2700_FBMHFJHDJNB() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_3.Unk2700_MBIDJDLLBNM, 9);
    }
    set Unk2700_FBMHFJHDJNB(value) {
        pb_1.Message.setRepeatedWrapperField(this, 9, value);
    }
    get battle_info() {
        return pb_1.Message.getWrapperField(this, dependency_2.Unk2700_DIEGJDEIDKO, 10);
    }
    set battle_info(value) {
        pb_1.Message.setWrapperField(this, 10, value);
    }
    get has_battle_info() {
        return pb_1.Message.getField(this, 10) != null;
    }
    get Unk2700_GALHBPGEGNL() {
        return pb_1.Message.getFieldWithDefault(this, 8, []);
    }
    set Unk2700_GALHBPGEGNL(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get Unk2700_DKCGOPBHJHA() {
        return pb_1.Message.getFieldWithDefault(this, 14, []);
    }
    set Unk2700_DKCGOPBHJHA(value) {
        pb_1.Message.setField(this, 14, value);
    }
    get Unk2700_OOBOCEALLBE() {
        return pb_1.Message.getFieldWithDefault(this, 6, []);
    }
    set Unk2700_OOBOCEALLBE(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get is_content_closed() {
        return pb_1.Message.getFieldWithDefault(this, 15, false);
    }
    set is_content_closed(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get explore_info() {
        return pb_1.Message.getWrapperField(this, dependency_2.Unk2700_DIEGJDEIDKO, 11);
    }
    set explore_info(value) {
        pb_1.Message.setWrapperField(this, 11, value);
    }
    get has_explore_info() {
        return pb_1.Message.getField(this, 11) != null;
    }
    get Unk2700_CFENLEBIKGG() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.ItemParam, 2);
    }
    set Unk2700_CFENLEBIKGG(value) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    static fromObject(data) {
        const message = new WinterCampActivityDetailInfo({});
        if (data.Unk2700_FBMHFJHDJNB != null) {
            message.Unk2700_FBMHFJHDJNB = data.Unk2700_FBMHFJHDJNB.map(item => dependency_3.Unk2700_MBIDJDLLBNM.fromObject(item));
        }
        if (data.battle_info != null) {
            message.battle_info = dependency_2.Unk2700_DIEGJDEIDKO.fromObject(data.battle_info);
        }
        if (data.Unk2700_GALHBPGEGNL != null) {
            message.Unk2700_GALHBPGEGNL = data.Unk2700_GALHBPGEGNL;
        }
        if (data.Unk2700_DKCGOPBHJHA != null) {
            message.Unk2700_DKCGOPBHJHA = data.Unk2700_DKCGOPBHJHA;
        }
        if (data.Unk2700_OOBOCEALLBE != null) {
            message.Unk2700_OOBOCEALLBE = data.Unk2700_OOBOCEALLBE;
        }
        if (data.is_content_closed != null) {
            message.is_content_closed = data.is_content_closed;
        }
        if (data.explore_info != null) {
            message.explore_info = dependency_2.Unk2700_DIEGJDEIDKO.fromObject(data.explore_info);
        }
        if (data.Unk2700_CFENLEBIKGG != null) {
            message.Unk2700_CFENLEBIKGG = data.Unk2700_CFENLEBIKGG.map(item => dependency_1.ItemParam.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.Unk2700_FBMHFJHDJNB != null) {
            data.Unk2700_FBMHFJHDJNB = this.Unk2700_FBMHFJHDJNB.map((item) => item.toObject());
        }
        if (this.battle_info != null) {
            data.battle_info = this.battle_info.toObject();
        }
        if (this.Unk2700_GALHBPGEGNL != null) {
            data.Unk2700_GALHBPGEGNL = this.Unk2700_GALHBPGEGNL;
        }
        if (this.Unk2700_DKCGOPBHJHA != null) {
            data.Unk2700_DKCGOPBHJHA = this.Unk2700_DKCGOPBHJHA;
        }
        if (this.Unk2700_OOBOCEALLBE != null) {
            data.Unk2700_OOBOCEALLBE = this.Unk2700_OOBOCEALLBE;
        }
        if (this.is_content_closed != null) {
            data.is_content_closed = this.is_content_closed;
        }
        if (this.explore_info != null) {
            data.explore_info = this.explore_info.toObject();
        }
        if (this.Unk2700_CFENLEBIKGG != null) {
            data.Unk2700_CFENLEBIKGG = this.Unk2700_CFENLEBIKGG.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.Unk2700_FBMHFJHDJNB.length)
            writer.writeRepeatedMessage(9, this.Unk2700_FBMHFJHDJNB, (item) => item.serialize(writer));
        if (this.has_battle_info)
            writer.writeMessage(10, this.battle_info, () => this.battle_info.serialize(writer));
        if (this.Unk2700_GALHBPGEGNL.length)
            writer.writePackedUint32(8, this.Unk2700_GALHBPGEGNL);
        if (this.Unk2700_DKCGOPBHJHA.length)
            writer.writePackedUint32(14, this.Unk2700_DKCGOPBHJHA);
        if (this.Unk2700_OOBOCEALLBE.length)
            writer.writePackedUint32(6, this.Unk2700_OOBOCEALLBE);
        if (this.is_content_closed != false)
            writer.writeBool(15, this.is_content_closed);
        if (this.has_explore_info)
            writer.writeMessage(11, this.explore_info, () => this.explore_info.serialize(writer));
        if (this.Unk2700_CFENLEBIKGG.length)
            writer.writeRepeatedMessage(2, this.Unk2700_CFENLEBIKGG, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new WinterCampActivityDetailInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    reader.readMessage(message.Unk2700_FBMHFJHDJNB, () => pb_1.Message.addToRepeatedWrapperField(message, 9, dependency_3.Unk2700_MBIDJDLLBNM.deserialize(reader), dependency_3.Unk2700_MBIDJDLLBNM));
                    break;
                case 10:
                    reader.readMessage(message.battle_info, () => message.battle_info = dependency_2.Unk2700_DIEGJDEIDKO.deserialize(reader));
                    break;
                case 8:
                    message.Unk2700_GALHBPGEGNL = reader.readPackedUint32();
                    break;
                case 14:
                    message.Unk2700_DKCGOPBHJHA = reader.readPackedUint32();
                    break;
                case 6:
                    message.Unk2700_OOBOCEALLBE = reader.readPackedUint32();
                    break;
                case 15:
                    message.is_content_closed = reader.readBool();
                    break;
                case 11:
                    reader.readMessage(message.explore_info, () => message.explore_info = dependency_2.Unk2700_DIEGJDEIDKO.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.Unk2700_CFENLEBIKGG, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_1.ItemParam.deserialize(reader), dependency_1.ItemParam));
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
        return WinterCampActivityDetailInfo.deserialize(bytes);
    }
}
exports.WinterCampActivityDetailInfo = WinterCampActivityDetailInfo;
_WinterCampActivityDetailInfo_one_of_decls = new WeakMap();