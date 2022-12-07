"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuqadasPotionActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MuqadasPotionLevelData_1 = require("./MuqadasPotionLevelData");
// @generated message type with reflection information, may provide speed optimized methods
class MuqadasPotionActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("MuqadasPotionActivityDetailInfo", [
            { no: 5, name: "muqadas_potion_level_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MuqadasPotionLevelData_1.MuqadasPotionLevelData }
        ]);
    }
    create(value) {
        const message = { muqadasPotionLevelDataList: [] };
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
                case /* repeated MuqadasPotionLevelData muqadas_potion_level_data_list */ 5:
                    message.muqadasPotionLevelDataList.push(MuqadasPotionLevelData_1.MuqadasPotionLevelData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated MuqadasPotionLevelData muqadas_potion_level_data_list = 5; */
        for (let i = 0; i < message.muqadasPotionLevelDataList.length; i++)
            MuqadasPotionLevelData_1.MuqadasPotionLevelData.internalBinaryWrite(message.muqadasPotionLevelDataList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MuqadasPotionActivityDetailInfo
 */
exports.MuqadasPotionActivityDetailInfo = new MuqadasPotionActivityDetailInfo$Type();
