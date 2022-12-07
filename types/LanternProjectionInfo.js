"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanternProjectionInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const LanternProjectionLevelInfo_1 = require("./LanternProjectionLevelInfo");
const ClientInputType_1 = require("./ClientInputType");
// @generated message type with reflection information, may provide speed optimized methods
class LanternProjectionInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("LanternProjectionInfo", [
            { no: 5, name: "Unk3300_FAIAIJGCBJG", kind: "enum", jsonName: "Unk3300FAIAIJGCBJG", repeat: 1 /*RepeatType.PACKED*/, T: () => ["ClientInputType", ClientInputType_1.ClientInputType, "CLIENT_INPUT_TYPE_"] },
            { no: 15, name: "open_stage_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "level_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => LanternProjectionLevelInfo_1.LanternProjectionLevelInfo },
            { no: 10, name: "Unk3300_EBHHFKLDOFB", kind: "enum", jsonName: "Unk3300EBHHFKLDOFB", repeat: 1 /*RepeatType.PACKED*/, T: () => ["ClientInputType", ClientInputType_1.ClientInputType, "CLIENT_INPUT_TYPE_"] }
        ]);
    }
    create(value) {
        const message = { unk3300FAIAIJGCBJG: [], openStageList: [], levelList: [], unk3300EBHHFKLDOFB: [] };
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
                case /* repeated ClientInputType Unk3300_FAIAIJGCBJG = 5 [json_name = "Unk3300FAIAIJGCBJG"];*/ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300FAIAIJGCBJG.push(reader.int32());
                    else
                        message.unk3300FAIAIJGCBJG.push(reader.int32());
                    break;
                case /* repeated uint32 open_stage_list */ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.openStageList.push(reader.uint32());
                    else
                        message.openStageList.push(reader.uint32());
                    break;
                case /* repeated LanternProjectionLevelInfo level_list */ 13:
                    message.levelList.push(LanternProjectionLevelInfo_1.LanternProjectionLevelInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated ClientInputType Unk3300_EBHHFKLDOFB = 10 [json_name = "Unk3300EBHHFKLDOFB"];*/ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300EBHHFKLDOFB.push(reader.int32());
                    else
                        message.unk3300EBHHFKLDOFB.push(reader.int32());
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
        /* repeated ClientInputType Unk3300_FAIAIJGCBJG = 5 [json_name = "Unk3300FAIAIJGCBJG"]; */
        if (message.unk3300FAIAIJGCBJG.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300FAIAIJGCBJG.length; i++)
                writer.int32(message.unk3300FAIAIJGCBJG[i]);
            writer.join();
        }
        /* repeated uint32 open_stage_list = 15; */
        if (message.openStageList.length) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.openStageList.length; i++)
                writer.uint32(message.openStageList[i]);
            writer.join();
        }
        /* repeated LanternProjectionLevelInfo level_list = 13; */
        for (let i = 0; i < message.levelList.length; i++)
            LanternProjectionLevelInfo_1.LanternProjectionLevelInfo.internalBinaryWrite(message.levelList[i], writer.tag(13, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated ClientInputType Unk3300_EBHHFKLDOFB = 10 [json_name = "Unk3300EBHHFKLDOFB"]; */
        if (message.unk3300EBHHFKLDOFB.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300EBHHFKLDOFB.length; i++)
                writer.int32(message.unk3300EBHHFKLDOFB[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message LanternProjectionInfo
 */
exports.LanternProjectionInfo = new LanternProjectionInfo$Type();
