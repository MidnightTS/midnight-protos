"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpActivityStateNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const OpActivityTagBriefInfo_1 = require("./OpActivityTagBriefInfo");
// @generated message type with reflection information, may provide speed optimized methods
class OpActivityStateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("OpActivityStateNotify", [
            { no: 6, name: "finished_bonus_activity_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "opened_op_activity_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => OpActivityTagBriefInfo_1.OpActivityTagBriefInfo }
        ]);
    }
    create(value) {
        const message = { finishedBonusActivityIdList: [], openedOpActivityInfoList: [] };
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
                case /* repeated uint32 finished_bonus_activity_id_list */ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.finishedBonusActivityIdList.push(reader.uint32());
                    else
                        message.finishedBonusActivityIdList.push(reader.uint32());
                    break;
                case /* repeated OpActivityTagBriefInfo opened_op_activity_info_list */ 8:
                    message.openedOpActivityInfoList.push(OpActivityTagBriefInfo_1.OpActivityTagBriefInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated uint32 finished_bonus_activity_id_list = 6; */
        if (message.finishedBonusActivityIdList.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.finishedBonusActivityIdList.length; i++)
                writer.uint32(message.finishedBonusActivityIdList[i]);
            writer.join();
        }
        /* repeated OpActivityTagBriefInfo opened_op_activity_info_list = 8; */
        for (let i = 0; i < message.openedOpActivityInfoList.length; i++)
            OpActivityTagBriefInfo_1.OpActivityTagBriefInfo.internalBinaryWrite(message.openedOpActivityInfoList[i], writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message OpActivityStateNotify
 */
exports.OpActivityStateNotify = new OpActivityStateNotify$Type();
