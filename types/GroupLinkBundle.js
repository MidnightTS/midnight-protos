"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GroupLinkBundle_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupLinkBundle = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GroupLinkBundle.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./Vector");
const pb_1 = require("google-protobuf");
class GroupLinkBundle extends pb_1.Message {
    constructor(data) {
        super();
        _GroupLinkBundle_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _GroupLinkBundle_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("center" in data && data.center != undefined) {
                this.center = data.center;
            }
            if ("is_activated" in data && data.is_activated != undefined) {
                this.is_activated = data.is_activated;
            }
            if ("bundle_id" in data && data.bundle_id != undefined) {
                this.bundle_id = data.bundle_id;
            }
            if ("Unk2700_JKDNOPGKJAC" in data && data.Unk2700_JKDNOPGKJAC != undefined) {
                this.Unk2700_JKDNOPGKJAC = data.Unk2700_JKDNOPGKJAC;
            }
            if ("scene_id" in data && data.scene_id != undefined) {
                this.scene_id = data.scene_id;
            }
            if ("radius" in data && data.radius != undefined) {
                this.radius = data.radius;
            }
        }
    }
    get center() {
        return pb_1.Message.getWrapperField(this, dependency_1.Vector, 4);
    }
    set center(value) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get has_center() {
        return pb_1.Message.getField(this, 4) != null;
    }
    get is_activated() {
        return pb_1.Message.getFieldWithDefault(this, 12, false);
    }
    set is_activated(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get bundle_id() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set bundle_id(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get Unk2700_JKDNOPGKJAC() {
        return pb_1.Message.getFieldWithDefault(this, 14, false);
    }
    set Unk2700_JKDNOPGKJAC(value) {
        pb_1.Message.setField(this, 14, value);
    }
    get scene_id() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set scene_id(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get radius() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set radius(value) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data) {
        const message = new GroupLinkBundle({});
        if (data.center != null) {
            message.center = dependency_1.Vector.fromObject(data.center);
        }
        if (data.is_activated != null) {
            message.is_activated = data.is_activated;
        }
        if (data.bundle_id != null) {
            message.bundle_id = data.bundle_id;
        }
        if (data.Unk2700_JKDNOPGKJAC != null) {
            message.Unk2700_JKDNOPGKJAC = data.Unk2700_JKDNOPGKJAC;
        }
        if (data.scene_id != null) {
            message.scene_id = data.scene_id;
        }
        if (data.radius != null) {
            message.radius = data.radius;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.center != null) {
            data.center = this.center.toObject();
        }
        if (this.is_activated != null) {
            data.is_activated = this.is_activated;
        }
        if (this.bundle_id != null) {
            data.bundle_id = this.bundle_id;
        }
        if (this.Unk2700_JKDNOPGKJAC != null) {
            data.Unk2700_JKDNOPGKJAC = this.Unk2700_JKDNOPGKJAC;
        }
        if (this.scene_id != null) {
            data.scene_id = this.scene_id;
        }
        if (this.radius != null) {
            data.radius = this.radius;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_center)
            writer.writeMessage(4, this.center, () => this.center.serialize(writer));
        if (this.is_activated != false)
            writer.writeBool(12, this.is_activated);
        if (this.bundle_id != 0)
            writer.writeUint32(3, this.bundle_id);
        if (this.Unk2700_JKDNOPGKJAC != false)
            writer.writeBool(14, this.Unk2700_JKDNOPGKJAC);
        if (this.scene_id != 0)
            writer.writeUint32(5, this.scene_id);
        if (this.radius != 0)
            writer.writeUint32(1, this.radius);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GroupLinkBundle();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    reader.readMessage(message.center, () => message.center = dependency_1.Vector.deserialize(reader));
                    break;
                case 12:
                    message.is_activated = reader.readBool();
                    break;
                case 3:
                    message.bundle_id = reader.readUint32();
                    break;
                case 14:
                    message.Unk2700_JKDNOPGKJAC = reader.readBool();
                    break;
                case 5:
                    message.scene_id = reader.readUint32();
                    break;
                case 1:
                    message.radius = reader.readUint32();
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
        return GroupLinkBundle.deserialize(bytes);
    }
}
exports.GroupLinkBundle = GroupLinkBundle;
_GroupLinkBundle_one_of_decls = new WeakMap();
