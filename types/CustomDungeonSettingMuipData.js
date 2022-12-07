"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDungeonSettingMuipData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonSettingMuipData$Type extends runtime_5.MessageType {
    constructor() {
        super("CustomDungeonSettingMuipData", [
            { no: 1, name: "is_arrive_finish", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "coin_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "time_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "is_forbid_skill", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "life_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isArriveFinish: false, coinLimit: 0, timeLimit: 0, isForbidSkill: false, lifeNum: 0 };
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
                case /* bool is_arrive_finish */ 1:
                    message.isArriveFinish = reader.bool();
                    break;
                case /* uint32 coin_limit */ 2:
                    message.coinLimit = reader.uint32();
                    break;
                case /* uint32 time_limit */ 3:
                    message.timeLimit = reader.uint32();
                    break;
                case /* bool is_forbid_skill */ 4:
                    message.isForbidSkill = reader.bool();
                    break;
                case /* uint32 life_num */ 5:
                    message.lifeNum = reader.uint32();
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
        /* bool is_arrive_finish = 1; */
        if (message.isArriveFinish !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isArriveFinish);
        /* uint32 coin_limit = 2; */
        if (message.coinLimit !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.coinLimit);
        /* uint32 time_limit = 3; */
        if (message.timeLimit !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.timeLimit);
        /* bool is_forbid_skill = 4; */
        if (message.isForbidSkill !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isForbidSkill);
        /* uint32 life_num = 5; */
        if (message.lifeNum !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.lifeNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CustomDungeonSettingMuipData
 */
exports.CustomDungeonSettingMuipData = new CustomDungeonSettingMuipData$Type();
