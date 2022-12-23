"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartCoopPointRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MainCoop_1 = require("./MainCoop");
// @generated message type with reflection information, may provide speed optimized methods
class StartCoopPointRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("StartCoopPointRsp", [
            { no: 4, name: "start_main_coop", kind: "message", T: () => MainCoop_1.MainCoop },
            { no: 2, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "is_start", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "coop_point", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, isStart: false, coopPoint: 0 };
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
                case /* MainCoop start_main_coop */ 4:
                    message.startMainCoop = MainCoop_1.MainCoop.internalBinaryRead(reader, reader.uint32(), options, message.startMainCoop);
                    break;
                case /* int32 retcode */ 2:
                    message.retcode = reader.int32();
                    break;
                case /* bool is_start */ 5:
                    message.isStart = reader.bool();
                    break;
                case /* uint32 coop_point */ 9:
                    message.coopPoint = reader.uint32();
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
        /* MainCoop start_main_coop = 4; */
        if (message.startMainCoop)
            MainCoop_1.MainCoop.internalBinaryWrite(message.startMainCoop, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 2; */
        if (message.retcode !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.retcode);
        /* bool is_start = 5; */
        if (message.isStart !== false)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isStart);
        /* uint32 coop_point = 9; */
        if (message.coopPoint !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.coopPoint);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message StartCoopPointRsp
 */
exports.StartCoopPointRsp = new StartCoopPointRsp$Type();
