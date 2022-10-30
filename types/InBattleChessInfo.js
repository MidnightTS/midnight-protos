"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _InBattleChessInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InBattleChessInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: InBattleChessInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./ChessCardInfo");
const dependency_2 = require("./ChessMysteryInfo");
const dependency_3 = require("./ChessPlayerInfo");
const pb_1 = require("google-protobuf");
class InBattleChessInfo extends pb_1.Message {
    constructor(data) {
        super();
        _InBattleChessInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2, 9], __classPrivateFieldGet(this, _InBattleChessInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("ban_card_tag_list" in data && data.ban_card_tag_list != undefined) {
                this.ban_card_tag_list = data.ban_card_tag_list;
            }
            if ("round" in data && data.round != undefined) {
                this.round = data.round;
            }
            if ("selected_card_info_list" in data && data.selected_card_info_list != undefined) {
                this.selected_card_info_list = data.selected_card_info_list;
            }
            if ("mystery_info" in data && data.mystery_info != undefined) {
                this.mystery_info = data.mystery_info;
            }
            if ("player_info_map" in data && data.player_info_map != undefined) {
                this.player_info_map = data.player_info_map;
            }
            if ("max_escapable_monsters" in data && data.max_escapable_monsters != undefined) {
                this.max_escapable_monsters = data.max_escapable_monsters;
            }
            if ("escaped_monsters" in data && data.escaped_monsters != undefined) {
                this.escaped_monsters = data.escaped_monsters;
            }
            if ("total_round" in data && data.total_round != undefined) {
                this.total_round = data.total_round;
            }
            if ("left_monsters" in data && data.left_monsters != undefined) {
                this.left_monsters = data.left_monsters;
            }
        }
        if (!this.player_info_map)
            this.player_info_map = new Map();
    }
    get ban_card_tag_list() {
        return pb_1.Message.getFieldWithDefault(this, 2, []);
    }
    set ban_card_tag_list(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get round() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set round(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get selected_card_info_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.ChessCardInfo, 9);
    }
    set selected_card_info_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 9, value);
    }
    get mystery_info() {
        return pb_1.Message.getWrapperField(this, dependency_2.ChessMysteryInfo, 1);
    }
    set mystery_info(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_mystery_info() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get player_info_map() {
        return pb_1.Message.getField(this, 8);
    }
    set player_info_map(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get max_escapable_monsters() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set max_escapable_monsters(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get escaped_monsters() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set escaped_monsters(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get total_round() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set total_round(value) {
        pb_1.Message.setField(this, 14, value);
    }
    get left_monsters() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set left_monsters(value) {
        pb_1.Message.setField(this, 15, value);
    }
    static fromObject(data) {
        const message = new InBattleChessInfo({});
        if (data.ban_card_tag_list != null) {
            message.ban_card_tag_list = data.ban_card_tag_list;
        }
        if (data.round != null) {
            message.round = data.round;
        }
        if (data.selected_card_info_list != null) {
            message.selected_card_info_list = data.selected_card_info_list.map(item => dependency_1.ChessCardInfo.fromObject(item));
        }
        if (data.mystery_info != null) {
            message.mystery_info = dependency_2.ChessMysteryInfo.fromObject(data.mystery_info);
        }
        if (typeof data.player_info_map == "object") {
            message.player_info_map = new Map(Object.entries(data.player_info_map).map(([key, value]) => [Number(key), dependency_3.ChessPlayerInfo.fromObject(value)]));
        }
        if (data.max_escapable_monsters != null) {
            message.max_escapable_monsters = data.max_escapable_monsters;
        }
        if (data.escaped_monsters != null) {
            message.escaped_monsters = data.escaped_monsters;
        }
        if (data.total_round != null) {
            message.total_round = data.total_round;
        }
        if (data.left_monsters != null) {
            message.left_monsters = data.left_monsters;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.ban_card_tag_list != null) {
            data.ban_card_tag_list = this.ban_card_tag_list;
        }
        if (this.round != null) {
            data.round = this.round;
        }
        if (this.selected_card_info_list != null) {
            data.selected_card_info_list = this.selected_card_info_list.map((item) => item.toObject());
        }
        if (this.mystery_info != null) {
            data.mystery_info = this.mystery_info.toObject();
        }
        if (this.player_info_map.size > 0) {
            data.player_info_map = (Object.fromEntries)((Array.from)(this.player_info_map).map(([key, value]) => [key, value.toObject()]));
        }
        if (this.max_escapable_monsters != null) {
            data.max_escapable_monsters = this.max_escapable_monsters;
        }
        if (this.escaped_monsters != null) {
            data.escaped_monsters = this.escaped_monsters;
        }
        if (this.total_round != null) {
            data.total_round = this.total_round;
        }
        if (this.left_monsters != null) {
            data.left_monsters = this.left_monsters;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.ban_card_tag_list.length)
            writer.writePackedUint32(2, this.ban_card_tag_list);
        if (this.round != 0)
            writer.writeUint32(4, this.round);
        if (this.selected_card_info_list.length)
            writer.writeRepeatedMessage(9, this.selected_card_info_list, (item) => item.serialize(writer));
        if (this.has_mystery_info)
            writer.writeMessage(1, this.mystery_info, () => this.mystery_info.serialize(writer));
        for (const [key, value] of this.player_info_map) {
            writer.writeMessage(8, this.player_info_map, () => {
                writer.writeUint32(1, key);
                writer.writeMessage(2, value, () => value.serialize(writer));
            });
        }
        if (this.max_escapable_monsters != 0)
            writer.writeUint32(6, this.max_escapable_monsters);
        if (this.escaped_monsters != 0)
            writer.writeUint32(12, this.escaped_monsters);
        if (this.total_round != 0)
            writer.writeUint32(14, this.total_round);
        if (this.left_monsters != 0)
            writer.writeUint32(15, this.left_monsters);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new InBattleChessInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    message.ban_card_tag_list = reader.readPackedUint32();
                    break;
                case 4:
                    message.round = reader.readUint32();
                    break;
                case 9:
                    reader.readMessage(message.selected_card_info_list, () => pb_1.Message.addToRepeatedWrapperField(message, 9, dependency_1.ChessCardInfo.deserialize(reader), dependency_1.ChessCardInfo));
                    break;
                case 1:
                    reader.readMessage(message.mystery_info, () => message.mystery_info = dependency_2.ChessMysteryInfo.deserialize(reader));
                    break;
                case 8:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.player_info_map, reader, reader.readUint32, () => {
                        let value;
                        reader.readMessage(message, () => value = dependency_3.ChessPlayerInfo.deserialize(reader));
                        return value;
                    }));
                    break;
                case 6:
                    message.max_escapable_monsters = reader.readUint32();
                    break;
                case 12:
                    message.escaped_monsters = reader.readUint32();
                    break;
                case 14:
                    message.total_round = reader.readUint32();
                    break;
                case 15:
                    message.left_monsters = reader.readUint32();
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
        return InBattleChessInfo.deserialize(bytes);
    }
}
exports.InBattleChessInfo = InBattleChessInfo;
_InBattleChessInfo_one_of_decls = new WeakMap();