"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCustomDungeonRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CustomDungeonBanInfo_1 = require("./CustomDungeonBanInfo");
const CustomDungeonBrief_1 = require("./CustomDungeonBrief");
// @generated message type with reflection information, may provide speed optimized methods
class GetCustomDungeonRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetCustomDungeonRsp", [
            { no: 5, name: "brief_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CustomDungeonBrief_1.CustomDungeonBrief },
            { no: 3, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "ban_info", kind: "message", T: () => CustomDungeonBanInfo_1.CustomDungeonBanInfo }
        ]);
    }
    create(value) {
        const message = { briefList: [], retcode: 0 };
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
                case /* repeated CustomDungeonBrief brief_list */ 5:
                    message.briefList.push(CustomDungeonBrief_1.CustomDungeonBrief.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 retcode */ 3:
                    message.retcode = reader.int32();
                    break;
                case /* CustomDungeonBanInfo ban_info */ 10:
                    message.banInfo = CustomDungeonBanInfo_1.CustomDungeonBanInfo.internalBinaryRead(reader, reader.uint32(), options, message.banInfo);
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
        /* repeated CustomDungeonBrief brief_list = 5; */
        for (let i = 0; i < message.briefList.length; i++)
            CustomDungeonBrief_1.CustomDungeonBrief.internalBinaryWrite(message.briefList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 3; */
        if (message.retcode !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.retcode);
        /* CustomDungeonBanInfo ban_info = 10; */
        if (message.banInfo)
            CustomDungeonBanInfo_1.CustomDungeonBanInfo.internalBinaryWrite(message.banInfo, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetCustomDungeonRsp
 */
exports.GetCustomDungeonRsp = new GetCustomDungeonRsp$Type();
