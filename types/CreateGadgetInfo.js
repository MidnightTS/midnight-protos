"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CreateGadgetInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGadgetInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: CreateGadgetInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./GadgetBornType");
const pb_1 = require("google-protobuf");
class CreateGadgetInfo extends pb_1.Message {
    constructor(data) {
        super();
        _CreateGadgetInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _CreateGadgetInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("born_type" in data && data.born_type != undefined) {
                this.born_type = data.born_type;
            }
            if ("chest" in data && data.chest != undefined) {
                this.chest = data.chest;
            }
        }
    }
    get born_type() {
        return pb_1.Message.getFieldWithDefault(this, 1, dependency_1.GadgetBornType.GADGET_BORN_TYPE_NONE);
    }
    set born_type(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get chest() {
        return pb_1.Message.getWrapperField(this, CreateGadgetInfo.Chest, 2);
    }
    set chest(value) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get has_chest() {
        return pb_1.Message.getField(this, 2) != null;
    }
    static fromObject(data) {
        const message = new CreateGadgetInfo({});
        if (data.born_type != null) {
            message.born_type = data.born_type;
        }
        if (data.chest != null) {
            message.chest = CreateGadgetInfo.Chest.fromObject(data.chest);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.born_type != null) {
            data.born_type = this.born_type;
        }
        if (this.chest != null) {
            data.chest = this.chest.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.born_type != dependency_1.GadgetBornType.GADGET_BORN_TYPE_NONE)
            writer.writeEnum(1, this.born_type);
        if (this.has_chest)
            writer.writeMessage(2, this.chest, () => this.chest.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CreateGadgetInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.born_type = reader.readEnum();
                    break;
                case 2:
                    reader.readMessage(message.chest, () => message.chest = CreateGadgetInfo.Chest.deserialize(reader));
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
        return CreateGadgetInfo.deserialize(bytes);
    }
}
exports.CreateGadgetInfo = CreateGadgetInfo;
_CreateGadgetInfo_one_of_decls = new WeakMap();
(function (CreateGadgetInfo) {
    var _Chest_one_of_decls;
    class Chest extends pb_1.Message {
        constructor(data) {
            super();
            _Chest_one_of_decls.set(this, []);
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Chest_one_of_decls, "f"));
            if (!Array.isArray(data) && typeof data == "object") {
                if ("chest_drop_id" in data && data.chest_drop_id != undefined) {
                    this.chest_drop_id = data.chest_drop_id;
                }
                if ("is_show_cutscene" in data && data.is_show_cutscene != undefined) {
                    this.is_show_cutscene = data.is_show_cutscene;
                }
            }
        }
        get chest_drop_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0);
        }
        set chest_drop_id(value) {
            pb_1.Message.setField(this, 1, value);
        }
        get is_show_cutscene() {
            return pb_1.Message.getFieldWithDefault(this, 2, false);
        }
        set is_show_cutscene(value) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data) {
            const message = new Chest({});
            if (data.chest_drop_id != null) {
                message.chest_drop_id = data.chest_drop_id;
            }
            if (data.is_show_cutscene != null) {
                message.is_show_cutscene = data.is_show_cutscene;
            }
            return message;
        }
        toObject() {
            const data = {};
            if (this.chest_drop_id != null) {
                data.chest_drop_id = this.chest_drop_id;
            }
            if (this.is_show_cutscene != null) {
                data.is_show_cutscene = this.is_show_cutscene;
            }
            return data;
        }
        serialize(w) {
            const writer = w || new pb_1.BinaryWriter();
            if (this.chest_drop_id != 0)
                writer.writeUint32(1, this.chest_drop_id);
            if (this.is_show_cutscene != false)
                writer.writeBool(2, this.is_show_cutscene);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes) {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Chest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.chest_drop_id = reader.readUint32();
                        break;
                    case 2:
                        message.is_show_cutscene = reader.readBool();
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
            return Chest.deserialize(bytes);
        }
    }
    _Chest_one_of_decls = new WeakMap();
    CreateGadgetInfo.Chest = Chest;
})(CreateGadgetInfo = exports.CreateGadgetInfo || (exports.CreateGadgetInfo = {}));
