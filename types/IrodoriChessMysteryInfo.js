"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IrodoriChessMysteryInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const IrodoriChessEntranceDetailInfo_1 = require("./IrodoriChessEntranceDetailInfo");
// @generated message type with reflection information, may provide speed optimized methods
class IrodoriChessMysteryInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("IrodoriChessMysteryInfo", [
            { no: 3, name: "entrance_detail_info", kind: "message", T: () => IrodoriChessEntranceDetailInfo_1.IrodoriChessEntranceDetailInfo },
            { no: 14, name: "exit_point_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "entrance_point_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { exitPointIdList: [], entrancePointIdList: [] };
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
                case /* IrodoriChessEntranceDetailInfo entrance_detail_info */ 3:
                    message.entranceDetailInfo = IrodoriChessEntranceDetailInfo_1.IrodoriChessEntranceDetailInfo.internalBinaryRead(reader, reader.uint32(), options, message.entranceDetailInfo);
                    break;
                case /* repeated uint32 exit_point_id_list */ 14:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.exitPointIdList.push(reader.uint32());
                    else
                        message.exitPointIdList.push(reader.uint32());
                    break;
                case /* repeated uint32 entrance_point_id_list */ 11:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.entrancePointIdList.push(reader.uint32());
                    else
                        message.entrancePointIdList.push(reader.uint32());
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
        /* IrodoriChessEntranceDetailInfo entrance_detail_info = 3; */
        if (message.entranceDetailInfo)
            IrodoriChessEntranceDetailInfo_1.IrodoriChessEntranceDetailInfo.internalBinaryWrite(message.entranceDetailInfo, writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 exit_point_id_list = 14; */
        if (message.exitPointIdList.length) {
            writer.tag(14, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.exitPointIdList.length; i++)
                writer.uint32(message.exitPointIdList[i]);
            writer.join();
        }
        /* repeated uint32 entrance_point_id_list = 11; */
        if (message.entrancePointIdList.length) {
            writer.tag(11, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.entrancePointIdList.length; i++)
                writer.uint32(message.entrancePointIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message IrodoriChessMysteryInfo
 */
exports.IrodoriChessMysteryInfo = new IrodoriChessMysteryInfo$Type();
