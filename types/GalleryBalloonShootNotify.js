"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GalleryBalloonShootNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryBalloonShootNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GalleryBalloonShootNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class GalleryBalloonShootNotify extends pb_1.Message {
    constructor(data) {
        super();
        _GalleryBalloonShootNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _GalleryBalloonShootNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("trigger_entity_id" in data && data.trigger_entity_id != undefined) {
                this.trigger_entity_id = data.trigger_entity_id;
            }
            if ("gallery_id" in data && data.gallery_id != undefined) {
                this.gallery_id = data.gallery_id;
            }
            if ("combo" in data && data.combo != undefined) {
                this.combo = data.combo;
            }
            if ("combo_disable_time" in data && data.combo_disable_time != undefined) {
                this.combo_disable_time = data.combo_disable_time;
            }
            if ("add_score" in data && data.add_score != undefined) {
                this.add_score = data.add_score;
            }
            if ("cur_score" in data && data.cur_score != undefined) {
                this.cur_score = data.cur_score;
            }
        }
    }
    get trigger_entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set trigger_entity_id(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get gallery_id() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set gallery_id(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get combo() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set combo(value) {
        pb_1.Message.setField(this, 14, value);
    }
    get combo_disable_time() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set combo_disable_time(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get add_score() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set add_score(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get cur_score() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set cur_score(value) {
        pb_1.Message.setField(this, 13, value);
    }
    static fromObject(data) {
        const message = new GalleryBalloonShootNotify({});
        if (data.trigger_entity_id != null) {
            message.trigger_entity_id = data.trigger_entity_id;
        }
        if (data.gallery_id != null) {
            message.gallery_id = data.gallery_id;
        }
        if (data.combo != null) {
            message.combo = data.combo;
        }
        if (data.combo_disable_time != null) {
            message.combo_disable_time = data.combo_disable_time;
        }
        if (data.add_score != null) {
            message.add_score = data.add_score;
        }
        if (data.cur_score != null) {
            message.cur_score = data.cur_score;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.trigger_entity_id != null) {
            data.trigger_entity_id = this.trigger_entity_id;
        }
        if (this.gallery_id != null) {
            data.gallery_id = this.gallery_id;
        }
        if (this.combo != null) {
            data.combo = this.combo;
        }
        if (this.combo_disable_time != null) {
            data.combo_disable_time = this.combo_disable_time;
        }
        if (this.add_score != null) {
            data.add_score = this.add_score;
        }
        if (this.cur_score != null) {
            data.cur_score = this.cur_score;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.trigger_entity_id != 0)
            writer.writeUint32(12, this.trigger_entity_id);
        if (this.gallery_id != 0)
            writer.writeUint32(5, this.gallery_id);
        if (this.combo != 0)
            writer.writeUint32(14, this.combo);
        if (this.combo_disable_time != 0)
            writer.writeUint64(6, this.combo_disable_time);
        if (this.add_score != 0)
            writer.writeInt32(11, this.add_score);
        if (this.cur_score != 0)
            writer.writeUint32(13, this.cur_score);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GalleryBalloonShootNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    message.trigger_entity_id = reader.readUint32();
                    break;
                case 5:
                    message.gallery_id = reader.readUint32();
                    break;
                case 14:
                    message.combo = reader.readUint32();
                    break;
                case 6:
                    message.combo_disable_time = reader.readUint64();
                    break;
                case 11:
                    message.add_score = reader.readInt32();
                    break;
                case 13:
                    message.cur_score = reader.readUint32();
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
        return GalleryBalloonShootNotify.deserialize(bytes);
    }
}
exports.GalleryBalloonShootNotify = GalleryBalloonShootNotify;
_GalleryBalloonShootNotify_one_of_decls = new WeakMap();