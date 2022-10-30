"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SceneGalleryHomeSeekFurnitureInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneGalleryHomeSeekFurnitureInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SceneGalleryHomeSeekFurnitureInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class SceneGalleryHomeSeekFurnitureInfo extends pb_1.Message {
    constructor(data) {
        super();
        _SceneGalleryHomeSeekFurnitureInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _SceneGalleryHomeSeekFurnitureInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("Unk2700_KDBENBBODGP" in data && data.Unk2700_KDBENBBODGP != undefined) {
                this.Unk2700_KDBENBBODGP = data.Unk2700_KDBENBBODGP;
            }
            if ("Unk2700_DDHOJHOICBL" in data && data.Unk2700_DDHOJHOICBL != undefined) {
                this.Unk2700_DDHOJHOICBL = data.Unk2700_DDHOJHOICBL;
            }
            if ("Unk2700_LODFFCPFJLC" in data && data.Unk2700_LODFFCPFJLC != undefined) {
                this.Unk2700_LODFFCPFJLC = data.Unk2700_LODFFCPFJLC;
            }
            if ("Unk2700_HLCIHCCGFFC" in data && data.Unk2700_HLCIHCCGFFC != undefined) {
                this.Unk2700_HLCIHCCGFFC = data.Unk2700_HLCIHCCGFFC;
            }
        }
        if (!this.Unk2700_DDHOJHOICBL)
            this.Unk2700_DDHOJHOICBL = new Map();
    }
    get Unk2700_KDBENBBODGP() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set Unk2700_KDBENBBODGP(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get Unk2700_DDHOJHOICBL() {
        return pb_1.Message.getField(this, 8);
    }
    set Unk2700_DDHOJHOICBL(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get Unk2700_LODFFCPFJLC() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set Unk2700_LODFFCPFJLC(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get Unk2700_HLCIHCCGFFC() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set Unk2700_HLCIHCCGFFC(value) {
        pb_1.Message.setField(this, 9, value);
    }
    static fromObject(data) {
        const message = new SceneGalleryHomeSeekFurnitureInfo({});
        if (data.Unk2700_KDBENBBODGP != null) {
            message.Unk2700_KDBENBBODGP = data.Unk2700_KDBENBBODGP;
        }
        if (typeof data.Unk2700_DDHOJHOICBL == "object") {
            message.Unk2700_DDHOJHOICBL = new Map(Object.entries(data.Unk2700_DDHOJHOICBL).map(([key, value]) => [Number(key), value]));
        }
        if (data.Unk2700_LODFFCPFJLC != null) {
            message.Unk2700_LODFFCPFJLC = data.Unk2700_LODFFCPFJLC;
        }
        if (data.Unk2700_HLCIHCCGFFC != null) {
            message.Unk2700_HLCIHCCGFFC = data.Unk2700_HLCIHCCGFFC;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.Unk2700_KDBENBBODGP != null) {
            data.Unk2700_KDBENBBODGP = this.Unk2700_KDBENBBODGP;
        }
        if (this.Unk2700_DDHOJHOICBL.size > 0) {
            data.Unk2700_DDHOJHOICBL = (Object.fromEntries)(this.Unk2700_DDHOJHOICBL);
        }
        if (this.Unk2700_LODFFCPFJLC != null) {
            data.Unk2700_LODFFCPFJLC = this.Unk2700_LODFFCPFJLC;
        }
        if (this.Unk2700_HLCIHCCGFFC != null) {
            data.Unk2700_HLCIHCCGFFC = this.Unk2700_HLCIHCCGFFC;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.Unk2700_KDBENBBODGP != 0)
            writer.writeUint32(6, this.Unk2700_KDBENBBODGP);
        for (const [key, value] of this.Unk2700_DDHOJHOICBL) {
            writer.writeMessage(8, this.Unk2700_DDHOJHOICBL, () => {
                writer.writeUint32(1, key);
                writer.writeUint32(2, value);
            });
        }
        if (this.Unk2700_LODFFCPFJLC != 0)
            writer.writeUint32(12, this.Unk2700_LODFFCPFJLC);
        if (this.Unk2700_HLCIHCCGFFC != 0)
            writer.writeUint32(9, this.Unk2700_HLCIHCCGFFC);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SceneGalleryHomeSeekFurnitureInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    message.Unk2700_KDBENBBODGP = reader.readUint32();
                    break;
                case 8:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.Unk2700_DDHOJHOICBL, reader, reader.readUint32, reader.readUint32));
                    break;
                case 12:
                    message.Unk2700_LODFFCPFJLC = reader.readUint32();
                    break;
                case 9:
                    message.Unk2700_HLCIHCCGFFC = reader.readUint32();
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
        return SceneGalleryHomeSeekFurnitureInfo.deserialize(bytes);
    }
}
exports.SceneGalleryHomeSeekFurnitureInfo = SceneGalleryHomeSeekFurnitureInfo;
_SceneGalleryHomeSeekFurnitureInfo_one_of_decls = new WeakMap();