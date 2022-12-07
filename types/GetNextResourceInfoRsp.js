"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetNextResourceInfoRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ResVersionConfig_1 = require("./ResVersionConfig");
// @generated message type with reflection information, may provide speed optimized methods
class GetNextResourceInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetNextResourceInfoRsp", [
            { no: 6, name: "next_res_version_config", kind: "message", T: () => ResVersionConfig_1.ResVersionConfig },
            { no: 8, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "next_resource_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, nextResourceUrl: "" };
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
                case /* ResVersionConfig next_res_version_config */ 6:
                    message.nextResVersionConfig = ResVersionConfig_1.ResVersionConfig.internalBinaryRead(reader, reader.uint32(), options, message.nextResVersionConfig);
                    break;
                case /* int32 retcode */ 8:
                    message.retcode = reader.int32();
                    break;
                case /* string next_resource_url */ 15:
                    message.nextResourceUrl = reader.string();
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
        /* ResVersionConfig next_res_version_config = 6; */
        if (message.nextResVersionConfig)
            ResVersionConfig_1.ResVersionConfig.internalBinaryWrite(message.nextResVersionConfig, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 8; */
        if (message.retcode !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.retcode);
        /* string next_resource_url = 15; */
        if (message.nextResourceUrl !== "")
            writer.tag(15, runtime_1.WireType.LengthDelimited).string(message.nextResourceUrl);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetNextResourceInfoRsp
 */
exports.GetNextResourceInfoRsp = new GetNextResourceInfoRsp$Type();
