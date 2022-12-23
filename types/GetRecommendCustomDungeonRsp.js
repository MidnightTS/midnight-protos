"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRecommendCustomDungeonRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const OtherCustomDungeonBrief_1 = require("./OtherCustomDungeonBrief");
// @generated message type with reflection information, may provide speed optimized methods
class GetRecommendCustomDungeonRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetRecommendCustomDungeonRsp", [
            { no: 7, name: "custom_dungeon_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => OtherCustomDungeonBrief_1.OtherCustomDungeonBrief },
            { no: 14, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { customDungeonList: [], retcode: 0 };
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
                case /* repeated OtherCustomDungeonBrief custom_dungeon_list */ 7:
                    message.customDungeonList.push(OtherCustomDungeonBrief_1.OtherCustomDungeonBrief.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 retcode */ 14:
                    message.retcode = reader.int32();
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
        /* repeated OtherCustomDungeonBrief custom_dungeon_list = 7; */
        for (let i = 0; i < message.customDungeonList.length; i++)
            OtherCustomDungeonBrief_1.OtherCustomDungeonBrief.internalBinaryWrite(message.customDungeonList[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 14; */
        if (message.retcode !== 0)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetRecommendCustomDungeonRsp
 */
exports.GetRecommendCustomDungeonRsp = new GetRecommendCustomDungeonRsp$Type();
