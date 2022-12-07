"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerHomeCompInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FriendEnterHomeOption_1 = require("./FriendEnterHomeOption");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerHomeCompInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerHomeCompInfo", [
            { no: 13, name: "friend_enter_home_option", kind: "enum", T: () => ["FriendEnterHomeOption", FriendEnterHomeOption_1.FriendEnterHomeOption, "FRIEND_ENTER_HOME_OPTION_"] },
            { no: 5, name: "seen_module_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "Unk3300_PBEFIJCEKMH", kind: "scalar", jsonName: "Unk3300PBEFIJCEKMH", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "Unk3300_JJPCFPAKFLM", kind: "scalar", jsonName: "Unk3300JJPCFPAKFLM", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { friendEnterHomeOption: 0, seenModuleIdList: [], unk3300PBEFIJCEKMH: [], unk3300JJPCFPAKFLM: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* FriendEnterHomeOption friend_enter_home_option */ 13:
                    message.friendEnterHomeOption = reader.int32();
                    break;
                case /* repeated uint32 seen_module_id_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.seenModuleIdList.push(reader.uint32());
                    else
                        message.seenModuleIdList.push(reader.uint32());
                    break;
                case /* repeated uint32 Unk3300_PBEFIJCEKMH = 2 [json_name = "Unk3300PBEFIJCEKMH"];*/ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300PBEFIJCEKMH.push(reader.uint32());
                    else
                        message.unk3300PBEFIJCEKMH.push(reader.uint32());
                    break;
                case /* repeated uint32 Unk3300_JJPCFPAKFLM = 11 [json_name = "Unk3300JJPCFPAKFLM"];*/ 11:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300JJPCFPAKFLM.push(reader.uint32());
                    else
                        message.unk3300JJPCFPAKFLM.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* FriendEnterHomeOption friend_enter_home_option = 13; */
        if (message.friendEnterHomeOption !== 0)
            writer.tag(13, runtime_2.WireType.Varint).int32(message.friendEnterHomeOption);
        /* repeated uint32 seen_module_id_list = 5; */
        if (message.seenModuleIdList.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.seenModuleIdList.length; i++)
                writer.uint32(message.seenModuleIdList[i]);
            writer.join();
        }
        /* repeated uint32 Unk3300_PBEFIJCEKMH = 2 [json_name = "Unk3300PBEFIJCEKMH"]; */
        if (message.unk3300PBEFIJCEKMH.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300PBEFIJCEKMH.length; i++)
                writer.uint32(message.unk3300PBEFIJCEKMH[i]);
            writer.join();
        }
        /* repeated uint32 Unk3300_JJPCFPAKFLM = 11 [json_name = "Unk3300JJPCFPAKFLM"]; */
        if (message.unk3300JJPCFPAKFLM.length) {
            writer.tag(11, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300JJPCFPAKFLM.length; i++)
                writer.uint32(message.unk3300JJPCFPAKFLM[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerHomeCompInfo
 */
exports.PlayerHomeCompInfo = new PlayerHomeCompInfo$Type();
