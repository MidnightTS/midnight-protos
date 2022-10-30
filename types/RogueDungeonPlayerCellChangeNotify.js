"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _RogueDungeonPlayerCellChangeNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RogueDungeonPlayerCellChangeNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: RogueDungeonPlayerCellChangeNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class RogueDungeonPlayerCellChangeNotify extends pb_1.Message {
    constructor(data) {
        super();
        _RogueDungeonPlayerCellChangeNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _RogueDungeonPlayerCellChangeNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("old_cell_id" in data && data.old_cell_id != undefined) {
                this.old_cell_id = data.old_cell_id;
            }
            if ("cell_id" in data && data.cell_id != undefined) {
                this.cell_id = data.cell_id;
            }
        }
    }
    get old_cell_id() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set old_cell_id(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get cell_id() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set cell_id(value) {
        pb_1.Message.setField(this, 7, value);
    }
    static fromObject(data) {
        const message = new RogueDungeonPlayerCellChangeNotify({});
        if (data.old_cell_id != null) {
            message.old_cell_id = data.old_cell_id;
        }
        if (data.cell_id != null) {
            message.cell_id = data.cell_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.old_cell_id != null) {
            data.old_cell_id = this.old_cell_id;
        }
        if (this.cell_id != null) {
            data.cell_id = this.cell_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.old_cell_id != 0)
            writer.writeUint32(10, this.old_cell_id);
        if (this.cell_id != 0)
            writer.writeUint32(7, this.cell_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new RogueDungeonPlayerCellChangeNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 10:
                    message.old_cell_id = reader.readUint32();
                    break;
                case 7:
                    message.cell_id = reader.readUint32();
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
        return RogueDungeonPlayerCellChangeNotify.deserialize(bytes);
    }
}
exports.RogueDungeonPlayerCellChangeNotify = RogueDungeonPlayerCellChangeNotify;
_RogueDungeonPlayerCellChangeNotify_one_of_decls = new WeakMap();