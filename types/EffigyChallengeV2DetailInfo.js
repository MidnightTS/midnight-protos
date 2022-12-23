"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EffigyChallengeV2DetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const EffigyChallengeV2LevelData_1 = require("./EffigyChallengeV2LevelData");
// @generated message type with reflection information, may provide speed optimized methods
class EffigyChallengeV2DetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("EffigyChallengeV2DetailInfo", [
            { no: 1, name: "level_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => EffigyChallengeV2LevelData_1.EffigyChallengeV2LevelData }
        ]);
    }
    create(value) {
        const message = { levelDataList: [] };
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
                case /* repeated EffigyChallengeV2LevelData level_data_list */ 1:
                    message.levelDataList.push(EffigyChallengeV2LevelData_1.EffigyChallengeV2LevelData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated EffigyChallengeV2LevelData level_data_list = 1; */
        for (let i = 0; i < message.levelDataList.length; i++)
            EffigyChallengeV2LevelData_1.EffigyChallengeV2LevelData.internalBinaryWrite(message.levelDataList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EffigyChallengeV2DetailInfo
 */
exports.EffigyChallengeV2DetailInfo = new EffigyChallengeV2DetailInfo$Type();
