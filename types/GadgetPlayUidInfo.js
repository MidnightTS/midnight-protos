"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GadgetPlayUidInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GadgetPlayUidInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GadgetPlayUidInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./ProfilePicture");
const pb_1 = require("google-protobuf");
class GadgetPlayUidInfo extends pb_1.Message {
    constructor(data) {
        super();
        _GadgetPlayUidInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _GadgetPlayUidInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("profile_picture" in data && data.profile_picture != undefined) {
                this.profile_picture = data.profile_picture;
            }
            if ("battle_watcher_id" in data && data.battle_watcher_id != undefined) {
                this.battle_watcher_id = data.battle_watcher_id;
            }
            if ("uid" in data && data.uid != undefined) {
                this.uid = data.uid;
            }
            if ("icon" in data && data.icon != undefined) {
                this.icon = data.icon;
            }
            if ("score" in data && data.score != undefined) {
                this.score = data.score;
            }
            if ("nickname" in data && data.nickname != undefined) {
                this.nickname = data.nickname;
            }
            if ("online_id" in data && data.online_id != undefined) {
                this.online_id = data.online_id;
            }
        }
    }
    get profile_picture() {
        return pb_1.Message.getWrapperField(this, dependency_1.ProfilePicture, 2);
    }
    set profile_picture(value) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get has_profile_picture() {
        return pb_1.Message.getField(this, 2) != null;
    }
    get battle_watcher_id() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set battle_watcher_id(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get uid() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set uid(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get icon() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set icon(value) {
        pb_1.Message.setField(this, 14, value);
    }
    get score() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set score(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get nickname() {
        return pb_1.Message.getFieldWithDefault(this, 3, "");
    }
    set nickname(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get online_id() {
        return pb_1.Message.getFieldWithDefault(this, 8, "");
    }
    set online_id(value) {
        pb_1.Message.setField(this, 8, value);
    }
    static fromObject(data) {
        const message = new GadgetPlayUidInfo({});
        if (data.profile_picture != null) {
            message.profile_picture = dependency_1.ProfilePicture.fromObject(data.profile_picture);
        }
        if (data.battle_watcher_id != null) {
            message.battle_watcher_id = data.battle_watcher_id;
        }
        if (data.uid != null) {
            message.uid = data.uid;
        }
        if (data.icon != null) {
            message.icon = data.icon;
        }
        if (data.score != null) {
            message.score = data.score;
        }
        if (data.nickname != null) {
            message.nickname = data.nickname;
        }
        if (data.online_id != null) {
            message.online_id = data.online_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.profile_picture != null) {
            data.profile_picture = this.profile_picture.toObject();
        }
        if (this.battle_watcher_id != null) {
            data.battle_watcher_id = this.battle_watcher_id;
        }
        if (this.uid != null) {
            data.uid = this.uid;
        }
        if (this.icon != null) {
            data.icon = this.icon;
        }
        if (this.score != null) {
            data.score = this.score;
        }
        if (this.nickname != null) {
            data.nickname = this.nickname;
        }
        if (this.online_id != null) {
            data.online_id = this.online_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_profile_picture)
            writer.writeMessage(2, this.profile_picture, () => this.profile_picture.serialize(writer));
        if (this.battle_watcher_id != 0)
            writer.writeUint32(6, this.battle_watcher_id);
        if (this.uid != 0)
            writer.writeUint32(7, this.uid);
        if (this.icon != 0)
            writer.writeUint32(14, this.icon);
        if (this.score != 0)
            writer.writeUint32(4, this.score);
        if (this.nickname.length)
            writer.writeString(3, this.nickname);
        if (this.online_id.length)
            writer.writeString(8, this.online_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GadgetPlayUidInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    reader.readMessage(message.profile_picture, () => message.profile_picture = dependency_1.ProfilePicture.deserialize(reader));
                    break;
                case 6:
                    message.battle_watcher_id = reader.readUint32();
                    break;
                case 7:
                    message.uid = reader.readUint32();
                    break;
                case 14:
                    message.icon = reader.readUint32();
                    break;
                case 4:
                    message.score = reader.readUint32();
                    break;
                case 3:
                    message.nickname = reader.readString();
                    break;
                case 8:
                    message.online_id = reader.readString();
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
        return GadgetPlayUidInfo.deserialize(bytes);
    }
}
exports.GadgetPlayUidInfo = GadgetPlayUidInfo;
_GadgetPlayUidInfo_one_of_decls = new WeakMap();