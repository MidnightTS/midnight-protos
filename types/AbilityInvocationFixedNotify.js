"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AbilityInvocationFixedNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityInvocationFixedNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AbilityInvocationFixedNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./AbilityInvokeEntry");
const pb_1 = require("google-protobuf");
class AbilityInvocationFixedNotify extends pb_1.Message {
    constructor(data) {
        super();
        _AbilityInvocationFixedNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _AbilityInvocationFixedNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("invoke6th" in data && data.invoke6th != undefined) {
                this.invoke6th = data.invoke6th;
            }
            if ("invoke5th" in data && data.invoke5th != undefined) {
                this.invoke5th = data.invoke5th;
            }
            if ("invoke4th" in data && data.invoke4th != undefined) {
                this.invoke4th = data.invoke4th;
            }
            if ("invoke2nd" in data && data.invoke2nd != undefined) {
                this.invoke2nd = data.invoke2nd;
            }
            if ("invoke1st" in data && data.invoke1st != undefined) {
                this.invoke1st = data.invoke1st;
            }
            if ("invoke3rd" in data && data.invoke3rd != undefined) {
                this.invoke3rd = data.invoke3rd;
            }
        }
    }
    get invoke6th() {
        return pb_1.Message.getWrapperField(this, dependency_1.AbilityInvokeEntry, 14);
    }
    set invoke6th(value) {
        pb_1.Message.setWrapperField(this, 14, value);
    }
    get has_invoke6th() {
        return pb_1.Message.getField(this, 14) != null;
    }
    get invoke5th() {
        return pb_1.Message.getWrapperField(this, dependency_1.AbilityInvokeEntry, 8);
    }
    set invoke5th(value) {
        pb_1.Message.setWrapperField(this, 8, value);
    }
    get has_invoke5th() {
        return pb_1.Message.getField(this, 8) != null;
    }
    get invoke4th() {
        return pb_1.Message.getWrapperField(this, dependency_1.AbilityInvokeEntry, 1);
    }
    set invoke4th(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_invoke4th() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get invoke2nd() {
        return pb_1.Message.getWrapperField(this, dependency_1.AbilityInvokeEntry, 5);
    }
    set invoke2nd(value) {
        pb_1.Message.setWrapperField(this, 5, value);
    }
    get has_invoke2nd() {
        return pb_1.Message.getField(this, 5) != null;
    }
    get invoke1st() {
        return pb_1.Message.getWrapperField(this, dependency_1.AbilityInvokeEntry, 10);
    }
    set invoke1st(value) {
        pb_1.Message.setWrapperField(this, 10, value);
    }
    get has_invoke1st() {
        return pb_1.Message.getField(this, 10) != null;
    }
    get invoke3rd() {
        return pb_1.Message.getWrapperField(this, dependency_1.AbilityInvokeEntry, 12);
    }
    set invoke3rd(value) {
        pb_1.Message.setWrapperField(this, 12, value);
    }
    get has_invoke3rd() {
        return pb_1.Message.getField(this, 12) != null;
    }
    static fromObject(data) {
        const message = new AbilityInvocationFixedNotify({});
        if (data.invoke6th != null) {
            message.invoke6th = dependency_1.AbilityInvokeEntry.fromObject(data.invoke6th);
        }
        if (data.invoke5th != null) {
            message.invoke5th = dependency_1.AbilityInvokeEntry.fromObject(data.invoke5th);
        }
        if (data.invoke4th != null) {
            message.invoke4th = dependency_1.AbilityInvokeEntry.fromObject(data.invoke4th);
        }
        if (data.invoke2nd != null) {
            message.invoke2nd = dependency_1.AbilityInvokeEntry.fromObject(data.invoke2nd);
        }
        if (data.invoke1st != null) {
            message.invoke1st = dependency_1.AbilityInvokeEntry.fromObject(data.invoke1st);
        }
        if (data.invoke3rd != null) {
            message.invoke3rd = dependency_1.AbilityInvokeEntry.fromObject(data.invoke3rd);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.invoke6th != null) {
            data.invoke6th = this.invoke6th.toObject();
        }
        if (this.invoke5th != null) {
            data.invoke5th = this.invoke5th.toObject();
        }
        if (this.invoke4th != null) {
            data.invoke4th = this.invoke4th.toObject();
        }
        if (this.invoke2nd != null) {
            data.invoke2nd = this.invoke2nd.toObject();
        }
        if (this.invoke1st != null) {
            data.invoke1st = this.invoke1st.toObject();
        }
        if (this.invoke3rd != null) {
            data.invoke3rd = this.invoke3rd.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_invoke6th)
            writer.writeMessage(14, this.invoke6th, () => this.invoke6th.serialize(writer));
        if (this.has_invoke5th)
            writer.writeMessage(8, this.invoke5th, () => this.invoke5th.serialize(writer));
        if (this.has_invoke4th)
            writer.writeMessage(1, this.invoke4th, () => this.invoke4th.serialize(writer));
        if (this.has_invoke2nd)
            writer.writeMessage(5, this.invoke2nd, () => this.invoke2nd.serialize(writer));
        if (this.has_invoke1st)
            writer.writeMessage(10, this.invoke1st, () => this.invoke1st.serialize(writer));
        if (this.has_invoke3rd)
            writer.writeMessage(12, this.invoke3rd, () => this.invoke3rd.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AbilityInvocationFixedNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 14:
                    reader.readMessage(message.invoke6th, () => message.invoke6th = dependency_1.AbilityInvokeEntry.deserialize(reader));
                    break;
                case 8:
                    reader.readMessage(message.invoke5th, () => message.invoke5th = dependency_1.AbilityInvokeEntry.deserialize(reader));
                    break;
                case 1:
                    reader.readMessage(message.invoke4th, () => message.invoke4th = dependency_1.AbilityInvokeEntry.deserialize(reader));
                    break;
                case 5:
                    reader.readMessage(message.invoke2nd, () => message.invoke2nd = dependency_1.AbilityInvokeEntry.deserialize(reader));
                    break;
                case 10:
                    reader.readMessage(message.invoke1st, () => message.invoke1st = dependency_1.AbilityInvokeEntry.deserialize(reader));
                    break;
                case 12:
                    reader.readMessage(message.invoke3rd, () => message.invoke3rd = dependency_1.AbilityInvokeEntry.deserialize(reader));
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
        return AbilityInvocationFixedNotify.deserialize(bytes);
    }
}
exports.AbilityInvocationFixedNotify = AbilityInvocationFixedNotify;
_AbilityInvocationFixedNotify_one_of_decls = new WeakMap();