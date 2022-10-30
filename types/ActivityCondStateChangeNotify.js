"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ActivityCondStateChangeNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityCondStateChangeNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ActivityCondStateChangeNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./Uint32Pair");
const pb_1 = require("google-protobuf");
class ActivityCondStateChangeNotify extends pb_1.Message {
    constructor(data) {
        super();
        _ActivityCondStateChangeNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [9, 11, 12, 1], __classPrivateFieldGet(this, _ActivityCondStateChangeNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("activated_sale_id_list" in data && data.activated_sale_id_list != undefined) {
                this.activated_sale_id_list = data.activated_sale_id_list;
            }
            if ("activity_id" in data && data.activity_id != undefined) {
                this.activity_id = data.activity_id;
            }
            if ("schedule_id" in data && data.schedule_id != undefined) {
                this.schedule_id = data.schedule_id;
            }
            if ("expire_cond_list" in data && data.expire_cond_list != undefined) {
                this.expire_cond_list = data.expire_cond_list;
            }
            if ("disable_transfer_point_interaction_list" in data && data.disable_transfer_point_interaction_list != undefined) {
                this.disable_transfer_point_interaction_list = data.disable_transfer_point_interaction_list;
            }
            if ("meet_cond_list" in data && data.meet_cond_list != undefined) {
                this.meet_cond_list = data.meet_cond_list;
            }
        }
    }
    get activated_sale_id_list() {
        return pb_1.Message.getFieldWithDefault(this, 9, []);
    }
    set activated_sale_id_list(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get activity_id() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set activity_id(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get schedule_id() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set schedule_id(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get expire_cond_list() {
        return pb_1.Message.getFieldWithDefault(this, 11, []);
    }
    set expire_cond_list(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get disable_transfer_point_interaction_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.Uint32Pair, 12);
    }
    set disable_transfer_point_interaction_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 12, value);
    }
    get meet_cond_list() {
        return pb_1.Message.getFieldWithDefault(this, 1, []);
    }
    set meet_cond_list(value) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data) {
        const message = new ActivityCondStateChangeNotify({});
        if (data.activated_sale_id_list != null) {
            message.activated_sale_id_list = data.activated_sale_id_list;
        }
        if (data.activity_id != null) {
            message.activity_id = data.activity_id;
        }
        if (data.schedule_id != null) {
            message.schedule_id = data.schedule_id;
        }
        if (data.expire_cond_list != null) {
            message.expire_cond_list = data.expire_cond_list;
        }
        if (data.disable_transfer_point_interaction_list != null) {
            message.disable_transfer_point_interaction_list = data.disable_transfer_point_interaction_list.map(item => dependency_1.Uint32Pair.fromObject(item));
        }
        if (data.meet_cond_list != null) {
            message.meet_cond_list = data.meet_cond_list;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.activated_sale_id_list != null) {
            data.activated_sale_id_list = this.activated_sale_id_list;
        }
        if (this.activity_id != null) {
            data.activity_id = this.activity_id;
        }
        if (this.schedule_id != null) {
            data.schedule_id = this.schedule_id;
        }
        if (this.expire_cond_list != null) {
            data.expire_cond_list = this.expire_cond_list;
        }
        if (this.disable_transfer_point_interaction_list != null) {
            data.disable_transfer_point_interaction_list = this.disable_transfer_point_interaction_list.map((item) => item.toObject());
        }
        if (this.meet_cond_list != null) {
            data.meet_cond_list = this.meet_cond_list;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.activated_sale_id_list.length)
            writer.writePackedUint32(9, this.activated_sale_id_list);
        if (this.activity_id != 0)
            writer.writeUint32(4, this.activity_id);
        if (this.schedule_id != 0)
            writer.writeUint32(5, this.schedule_id);
        if (this.expire_cond_list.length)
            writer.writePackedUint32(11, this.expire_cond_list);
        if (this.disable_transfer_point_interaction_list.length)
            writer.writeRepeatedMessage(12, this.disable_transfer_point_interaction_list, (item) => item.serialize(writer));
        if (this.meet_cond_list.length)
            writer.writePackedUint32(1, this.meet_cond_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ActivityCondStateChangeNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    message.activated_sale_id_list = reader.readPackedUint32();
                    break;
                case 4:
                    message.activity_id = reader.readUint32();
                    break;
                case 5:
                    message.schedule_id = reader.readUint32();
                    break;
                case 11:
                    message.expire_cond_list = reader.readPackedUint32();
                    break;
                case 12:
                    reader.readMessage(message.disable_transfer_point_interaction_list, () => pb_1.Message.addToRepeatedWrapperField(message, 12, dependency_1.Uint32Pair.deserialize(reader), dependency_1.Uint32Pair));
                    break;
                case 1:
                    message.meet_cond_list = reader.readPackedUint32();
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
        return ActivityCondStateChangeNotify.deserialize(bytes);
    }
}
exports.ActivityCondStateChangeNotify = ActivityCondStateChangeNotify;
_ActivityCondStateChangeNotify_one_of_decls = new WeakMap();
