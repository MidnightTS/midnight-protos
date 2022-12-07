"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharAmusementDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CharAmusementStageData_1 = require("./CharAmusementStageData");
// @generated message type with reflection information, may provide speed optimized methods
class CharAmusementDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("CharAmusementDetailInfo", [
            { no: 12, name: "stage_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CharAmusementStageData_1.CharAmusementStageData }
        ]);
    }
    create(value) {
        const message = { stageDataList: [] };
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
                case /* repeated CharAmusementStageData stage_data_list */ 12:
                    message.stageDataList.push(CharAmusementStageData_1.CharAmusementStageData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated CharAmusementStageData stage_data_list = 12; */
        for (let i = 0; i < message.stageDataList.length; i++)
            CharAmusementStageData_1.CharAmusementStageData.internalBinaryWrite(message.stageDataList[i], writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CharAmusementDetailInfo
 */
exports.CharAmusementDetailInfo = new CharAmusementDetailInfo$Type();
