"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrystalLinkActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CrystalLinkLevelInfo_1 = require("./CrystalLinkLevelInfo");
// @generated message type with reflection information, may provide speed optimized methods
class CrystalLinkActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("CrystalLinkActivityDetailInfo", [
            { no: 5, name: "level_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CrystalLinkLevelInfo_1.CrystalLinkLevelInfo },
            { no: 12, name: "difficulty_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { levelInfoList: [], difficultyId: 0 };
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
                case /* repeated CrystalLinkLevelInfo level_info_list */ 5:
                    message.levelInfoList.push(CrystalLinkLevelInfo_1.CrystalLinkLevelInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 difficulty_id */ 12:
                    message.difficultyId = reader.uint32();
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
        /* repeated CrystalLinkLevelInfo level_info_list = 5; */
        for (let i = 0; i < message.levelInfoList.length; i++)
            CrystalLinkLevelInfo_1.CrystalLinkLevelInfo.internalBinaryWrite(message.levelInfoList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 difficulty_id = 12; */
        if (message.difficultyId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.difficultyId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CrystalLinkActivityDetailInfo
 */
exports.CrystalLinkActivityDetailInfo = new CrystalLinkActivityDetailInfo$Type();
